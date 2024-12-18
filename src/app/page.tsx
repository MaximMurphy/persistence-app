import Image from "next/image";
import logo from "@/public/logo.svg";
import { SignIn } from "@/app/_components/Buttons/SignIn";

export default function Home() {
  return (
    <div className="bg-gradient-to-tl from-background via-background to-accentPurple/75 h-full w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24">
      <Image
        src={logo}
        alt="Logo"
        className="w-48 lg:w-96 h-fit shadow-inner shadow-cream rounded-lg"
      />
      <div className="w-[32rem] flex flex-col gap-4 p-8">
        <h1>Persistence - A Productivity App</h1>
        <p>
          Tempor in ea ad ad ad laboris eu esse laborum velit aute anim cillum
          aliqua sit. Elit ad nulla cupidatat Lorem sit esse excepteur Lorem
          aute non duis ad. Est do id nisi ex elit ad deserunt. Culpa
          exercitation ex ex eiusmod deserunt id. Dolore magna consequat do
          ullamco voluptate culpa nulla nostrud Lorem Lorem.
        </p>
        <SignIn />
      </div>
    </div>
  );
}
