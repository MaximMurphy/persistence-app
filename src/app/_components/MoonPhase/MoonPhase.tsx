// Remove the "use client" directive since this is now a server component
async function getMoonPhase() {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/cleveland?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=5NQR8AHPBUMW6HUXX3PQDK375&options=beta&contentType=json`,
    {
      next: { revalidate: 43200 }, // 12 hours in seconds
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.currentConditions.moonphase;
}

function getMoonPhaseEmoji(moonPhase: number) {
  if (moonPhase >= 0 && moonPhase < 0.25) return "🌒";
  if (moonPhase === 0.25) return "🌓";
  if (moonPhase > 0.25 && moonPhase < 0.5) return "🌔";
  if (moonPhase === 0.5) return "🌕";
  if (moonPhase > 0.5 && moonPhase < 0.75) return "🌖";
  if (moonPhase === 0.75) return "🌗";
  if (moonPhase > 0.75 && moonPhase <= 1) return "🌘";
  return "🌑";
}

export default async function MoonPhase() {
  const moonPhase = await getMoonPhase();
  const moonPhaseEmoji = getMoonPhaseEmoji(moonPhase);

  return (
    <h1 className="text-lg lg:text-2xl brightness-90">{moonPhaseEmoji}</h1>
  );
}
