import Image from "next/image";
import word from "@/public/word.svg";

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 gap-2 lg:gap-0 border-t border-browser text-cream/75">
      <Image src={word} alt="logo" className="w-48 h-fit" />

      <p className="text-xs opacity-50">{`© ${new Date().getFullYear()} Maxim Murphy - All rights reserved`}</p>
    </div>
  );
}
