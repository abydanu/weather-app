'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Input from "./component/Input";
import Current from "./component/Current";
import WeatherDetail from "./component/WeatherDetail";
import WeekForecast from "./component/WeekForecast";
import { WeatherData } from "./types/weather";

const Home = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    if (!location.trim()) {
      setError("Silakan masukkan nama kota!");
      return;
    }

    setIsLoading(true);
    try {
      const url = `/api/weather?q=${location}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }

      const json = await response.json();
      setData(json);
      setLocation("");
      setError("");
    } catch (error) {
      setError("Kota tidak ditemukan!");
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }
};



  let content;
  if (!data && error === '') {
    content = (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-center h-screen mt-[5rem]"
      >
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Weather App</h2>
        <p className="text-xl">Enter a city name to get weather forecast</p>
      </motion.div>
    );
  } else if (error !== "") {
    content = (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-center h-screen mt-[5rem]"
      >
        <p className="text-3xl font-semibold mb-4">City Not Found!</p>
        <p className="text-xl">Enter valid City!</p>
      </motion.div>
    );
  } else {
    content = (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {data?.current && data?.forecast ? (
          <>
            <div className="flex md:flex-row flex-col p-12 items-center justify-between">
              <Current data={data} />
              <WeekForecast data={data} />
            </div>
            <div>
              <WeatherDetail data={data} />
            </div>
          </>
        ) : (
          <p className="text-center py-10">Loading.....</p>
        )}
      </motion.div>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit lg:h-screen">
        {/* Search & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center p-12 text-2xl">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold"
          >
            Weather <span className="text-amber-400">App.</span>
          </motion.h1>
        </div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center h-[50vh]"
            >
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
