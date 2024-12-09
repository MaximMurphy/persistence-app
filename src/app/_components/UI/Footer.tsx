import Image from "next/image";
import word from "../../../../public/word.svg";

export default function Footer() {
  return (
    <div className="flex justify-between items-end p-4">
      <Image src={word} alt="logo" className="w-48 h-fit" />
      <p className="text-xs opacity-50">{`© ${new Date().getFullYear()} Maxim Murphy - All rights reserved`}</p>
    </div>
  );
}
