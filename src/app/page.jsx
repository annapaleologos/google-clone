import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* header */}
      <HomeHeader />
      {/* body */}
      <div className="flex flex-col items-center mt-24">
        <Image
          width={300}
          height={100}
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
        />
        <HomeSearch />
      </div>
    </>
  );
}
