import Image from "next/image";
import Link from "next/link";
import letters from "@/public/letters.svg";
import starsSquare from "@/public/logo.svg";

export default function Header() {
  return (
    <div className="w-full h-32 lg:h-fit flex shrink-0 items-center justify-center py-2 text-cream/75">
      <div className="w-full lg:w-1/2 h-fit flex items-center justify-center lg:justify-start lg:pl-8">
        <Link href="/">
          <Image
            src={letters}
            alt="logo"
            priority
            className="h-24 lg:h-24 w-auto"
          />
        </Link>
      </div>
      <div className="hidden w-full lg:w-1/2 h-fit lg:flex items-center justify-end pr-8">
        <Image
          src={starsSquare}
          alt="logo"
          priority
          className="h-20 lg:h-20 w-auto"
        />
      </div>
    </div>
  );
}
