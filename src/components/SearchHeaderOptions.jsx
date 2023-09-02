"use client";

import { AiOutlineSearch,AiOutlineCamera } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  function selectTab(tab) {
      router.push(
        `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
      );
  }

  return (
    <div className="flex justify-center w-full space-x-2 text-sm text-gray-700 border-b select-none lg:justify-start lg:pl-52">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center pb-3 space-x-1 border-b-4 border-transparent cursor-pointer active:text-blue-500px-2 
        ${pathname === "/search/web" && "!text-blue-600 !border-blue-600"}`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center pb-3 space-x-1 border-b-4 border-transparent cursor-pointer active:text-blue-500px-2 
        ${pathname === "/search/image" && "!text-blue-600 !border-blue-600"}`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
