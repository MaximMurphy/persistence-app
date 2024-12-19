import Image from "next/image";
import logo from "@/public/word.svg";

import { SignIn } from "@/app/_components/Buttons/SignIn";
import GoToDashboard from "@/app/_components/Buttons/GoToDashboard";
import { GridBackground } from "@/app/_components/ui/GridBackground";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 px-6 md:px-24 lg:px-0 pt-24 lg:pt-0">
      <div className="bg-cream shadow-xl h-fit border-2 border-browser text-background w-full lg:w-[36rem] flex flex-col rounded-md gap-4 p-8 items-center lg:items-start justify-center text-justify">
        <Image src={logo} alt="logo" className="w-full h-auto" />
        <p className="px-2">
          Tempor in ea ad ad ad laboris eu esse laborum velit aute anim cillum
          aliqua sit. Elit ad nulla cupidatat Lorem sit esse excepteur Lorem
          aute non duis ad. Est do id nisi ex elit ad deserunt. Culpa
          exercitation ex ex eiusmod deserunt id. Dolore magna consequat do
          ullamco voluptate culpa nulla nostrud Lorem Lorem.
        </p>
        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 px-2">
          <SignIn />
          <GoToDashboard />
        </div>
      </div>
      <GridBackground />
    </div>
  );
}
