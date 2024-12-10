import Image from "next/image";
import letters from "@/public/letters.svg";

export default function Header() {
  return (
    <div className="w-full h-fit flex justify-center py-2">
      <Image
        src={letters}
        alt="logo"
        priority
        className="w-24 lg:w-40 h-auto"
      />
    </div>
  );
}
