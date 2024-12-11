import Image from "next/image";
import letters from "@/public/letters.svg";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-fit flex shrink-0 items-center justify-center py-2 text-cream/75">
      <div className="w-full lg:w-1/3 h-fit flex items-center justify-center lg:justify-start">
        <Link href="/about" className="w-fit hover:underline lg:pl-24">
          About
        </Link>
      </div>

      <Link
        href="/"
        className="w-full lg:w-1/3 h-fit flex items-center justify-center"
      >
        <Image
          src={letters}
          alt="logo"
          priority
          className="w-24 lg:w-40 h-auto"
        />
      </Link>
      <div className="w-full lg:w-1/3 h-fit flex items-center justify-center lg:justify-end">
        <Link href="/" className="w-fit hover:underline lg:pr-24">
          Account
        </Link>
      </div>
    </div>
  );
}
