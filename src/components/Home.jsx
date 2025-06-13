import React, { useEffect, useState } from "react";
import pattern from "../assets/pattern-bg-desktop.png";
import patternMobile from "../assets/pattern-bg-mobile.png";
import icon from "../assets/icon-arrow.svg";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Home = () => {
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const API_KEY = "at_e5EfkzD7i4YlSogCiCDdWutClkVtW";

  const fetchIPInfo = async () => {
    try {
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch IP data");
      }

      const data = await response.json();
      setIpData(data);
      setError(null);
      console.log("Default IP data:", data);
    } catch (err) {
      setError(err.message);
      console.error("Default IP fetch error:", err.message);
    }
  };

  const see = async () => {
    try {
      if (!query.trim()) return;

      const url = new URL("https://geo.ipify.org/api/v2/country,city");
      url.searchParams.append("apiKey", API_KEY);
      url.searchParams.append("ipAddress", query);

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch IP data");

      const data = await res.json();
      setIpData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchIPInfo();
  }, []);

  return (
    <>
      <div className="relative">
        <img
          src={pattern}
          alt="pattern"
          className="h-60 w-full object-fit hidden md:block"
        />
        <img
          src={patternMobile}
          alt="mobile pattern"
          className="w-full h-[16rem] md:hidden"
        />
        <div className="absolute inset-x-0 top-0 mt-5 text-center">
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            IP Address Tracker
          </h1>
          <div className="flex items-center justify-center w-full mt-5">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="w-[75%] md:w-1/3 rounded-l-xl p-3 outline-none text-black placeholder:text-xs"
              type="text"
              placeholder="Search for any IP address or domain"
            />
            <button
              onClick={see}
              className="cursor-pointer bg-black text-white rounded-r-xl h-[50px]"
            >
              <img src={icon} alt="arrow" className="px-5" />
            </button>
          </div>

          <ul className="bg-slate-100 relative z-10 rounded-lg mt-5 md:mt-12 w-[90%] md:w-[70%] mx-auto py-7 px-5 block md:flex items-center justify-between">
            <li className="text-center md:text-left flex-col">
              <h2 className="font-light text-sm text-darkGrey">IP Address</h2>
              <h2 className="font-bold text-2xl text-veryDarkGrey">
                {ipData ? ipData.ip : "Loading..."}
              </h2>
            </li>
            <li className="text-center md:text-left flex-col">
              <h2 className="font-light text-sm text-darkGrey">LOCATION</h2>
              <h2 className="font-bold text-2xl text-veryDarkGrey">
                {ipData
                  ? `${ipData.location.city}, ${ipData.location.country}`
                  : "Loading..."}
              </h2>
            </li>
            <li className="text-center md:text-left flex-col">
              <h2 className="font-light text-sm text-darkGrey">TIMEZONE</h2>
              <h2 className="font-bold text-2xl text-veryDarkGrey">
                {ipData ? `UTC ${ipData.location.timezone}` : "Loading..."}
              </h2>
            </li>
            <li className="text-center md:text-left flex-col">
              <h2 className="font-light text-sm text-darkGrey">ISP</h2>
              <h2 className="font-bold text-2xl text-veryDarkGrey">
                {ipData ? ipData.isp : "Loading..."}
              </h2>
            </li>
          </ul>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
        {/* map */}
        <div className="height absolute top-full inset-0 z-0">
          {ipData && ipData.location && (
            <div className="w-full h-full">
              <MapContainer
                center={[ipData.location.lat, ipData.location.lng]}
                zoom={13}
                scrollWheelZoom={false}
                className="w-full h-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={[ipData.location.lat, ipData.location.lng]}>
                  <Popup>
                    {ipData.ip}
                    <br />
                    {ipData.location.city}, {ipData.location.country}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
