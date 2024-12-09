import Image from "next/image";
import letters from "../../../../public/letters.svg";

export default function Header() {
  return (
    <div className="w-full h-fit flex justify-center py-2">
      <Image src={letters} alt="logo" className="w-24 lg:w-48 h-auto" />
    </div>
  );
}
