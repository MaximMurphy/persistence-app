import Image from "next/image";
import logo from "@/public/starsRect.svg";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 lg:px-48 gap-12 mt-12 lg:mt-0">
      <Image src={logo} alt="logo" priority className="h-64 lg:h-64 w-auto" />
      <div className="w-full lg:h-64 h-fit py-6 px-4 border lg:border-2 border-browser rounded-md text-cream/75">
        <p className="text-justify">
          There will be info here describing how to use this tool. Lots of info
          and cool info and information. So keep an eye out for updates with
          more infomation about the info here.
        </p>
        <p className="text-xs opacity-50">{`© ${new Date().getFullYear()} Maxim Murphy - All rights reserved`}</p>
      </div>
    </div>
  );
}
