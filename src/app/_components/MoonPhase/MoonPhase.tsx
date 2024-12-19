"use client";
import { useState, useEffect } from "react";

export default function MoonPhase() {
  const [moonPhase, setMoonPhase] = useState(null);
  let moonPhaseEmoji = "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/cleveland?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=5NQR8AHPBUMW6HUXX3PQDK375&options=beta&contentType=json`,
          {
            method: "GET",
            headers: {},
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMoonPhase(data.currentConditions.moonphase);
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    fetchData();
  }, []);

  //console.log(data);

  if (moonPhase) {
    if (moonPhase >= 0 && moonPhase < 0.25) {
      moonPhaseEmoji = "🌒";
    } else if (moonPhase === 0.25) {
      moonPhaseEmoji = "🌓";
    } else if (moonPhase > 0.25 && moonPhase < 0.5) {
      moonPhaseEmoji = "🌔";
    } else if (moonPhase === 0.5) {
      moonPhaseEmoji = "🌕";
    } else if (moonPhase > 0.5 && moonPhase < 0.75) {
      moonPhaseEmoji = "🌖";
    } else if (moonPhase === 0.75) {
      moonPhaseEmoji = "🌗";
    } else if (moonPhase > 0.75 && moonPhase <= 1) {
      moonPhaseEmoji = "🌘";
    }
  }

  return (
    <h1 className="text-lg lg:text-2xl brightness-90">
      {moonPhase === null ? "🌑" : moonPhaseEmoji}
    </h1>
  );
}
