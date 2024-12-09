import Image from "next/image";
import letters from "../../../../public/letters.png";

export default function Header() {
  return (
    <div className="flex justify-center items-start">
      <Image src={letters} alt="logo" className="w-36 h-auto" />
    </div>
  );
}
