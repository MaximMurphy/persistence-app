import Image from "next/image";
import Link from "next/link";
import word from "@/public/word.svg";

export default function Footer() {
  return (
    <div className="w-full h-fit flex shrink-0 items-center justify-center py-4 text-cream/75">
      <div className="w-full lg:w-1/3 h-fit flex items-center justify-center lg:justify-start">
        <Link href="/about" className="w-fit hover:underline lg:pl-24">
          About
        </Link>
      </div>

      <Link
        href="/"
        className="w-full lg:w-1/3 h-fit flex items-center justify-center"
      >
        <Image src={word} alt="logo" className="w-48 h-fit" />
      </Link>
      <div className="w-full lg:w-1/3 h-fit flex items-center justify-center lg:justify-end">
        <Link href="/" className="w-fit hover:underline lg:pr-24">
          Account
        </Link>
      </div>
    </div>
  );
}
