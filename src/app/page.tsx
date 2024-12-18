import Image from "next/image";
import logo from "@/public/logo.svg";
import { SignIn } from "@/app/_components/Buttons/SignIn";
import GoToDashboard from "@/app/_components/Buttons/GoToDashboard";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-tl from-background via-background to-accentPurple/75 h-full w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 pt-24 lg:pt-0">
      <Image
        src={logo}
        alt="Logo"
        className="w-48 lg:w-96 h-fit shadow-inner shadow-cream rounded-lg"
      />
      <div className="w-full lg:w-[32rem] flex flex-col gap-4 p-8 items-center lg:items-start justify-center text-justify">
        <h1>Persistence - A Productivity App</h1>
        <p>
          Tempor in ea ad ad ad laboris eu esse laborum velit aute anim cillum
          aliqua sit. Elit ad nulla cupidatat Lorem sit esse excepteur Lorem
          aute non duis ad. Est do id nisi ex elit ad deserunt. Culpa
          exercitation ex ex eiusmod deserunt id. Dolore magna consequat do
          ullamco voluptate culpa nulla nostrud Lorem Lorem.
        </p>
        <div className="flex gap-8">
          <SignIn />
          <GoToDashboard />
        </div>
      </div>
      {/* <div className="absolute inset-0 w-full grid grid-cols-auto-fill gap-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`h-32 w-32 rounded-lg ${
              i % 4 === 0
                ? "bg-cream"
                : i % 4 === 1
                ? "bg-accentBlue"
                : i % 4 === 2
                ? "bg-accentPurple"
                : "bg-accentPink"
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
}
