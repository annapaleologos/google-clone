import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full p-6">
        <Link href={"/"}>
          <Image
            width="120"
            height="40"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="items-center hidden space-x-2 md:inline-flex">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="px-6 py-2 ml-2 font-medium text-white transition-all bg-blue-500 rounded-md hover:brightness-105 hover:shadow-md">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
