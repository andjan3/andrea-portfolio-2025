import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import { GoArrowDown } from "react-icons/go";
import Link from "next/link";

export const Hero = ({ blok }: any) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className={`h-full w-[100%] flex flex-col justify-center mx-auto`}
    >
      <div className="relative w-[100%] h-[100vh]">
        <Image
          src={blok.hero_image.filename}
          alt={blok.hero_image.alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-[100%] h-[100vh] bg-black opacity-40 z-10"></div>
      <div className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] text-white flex flex-col gap-5">
        <div className="flex justify-start items-center gap-4 ">
          <hr className="w-[10%] border-t-2 border-[#FBD784]" />
          <span className="block text-lg">{blok.hero_subtitle}</span>
        </div>

        <h1 className="text-4xl  text-white w-[60%]">{blok.hero_title}</h1>
        <div className="mt-4  text-white hero-content">
          {render(blok.hero_content)}
        </div>
        <div className="flex items-center gap-2">
          <Link href={"#"} className="pt-2 text-lg">
            {blok.link_title}
          </Link>
          <GoArrowDown className="text-white" fontSize={35} />
        </div>
      </div>
    </div>
  );
};
