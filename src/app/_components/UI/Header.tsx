import Image from "next/image";
import letters from "../../../../public/letters.svg";

export default function Header() {
  return (
    <div className="flex justify-center items-start border-b-2 border-b-browser">
      <Image src={letters} alt="logo" className="w-36 h-auto" />
    </div>
  );
}
