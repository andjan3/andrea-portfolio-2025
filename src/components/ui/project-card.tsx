/* import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { IoIosArrowRoundForward } from "react-icons/io";

export const ProjectCard = ({ blok }: any) => {
  return (
    <div className="lg:grid grid-cols-2 w-[95%] mx-auto gap-32 ">
      <div
        className={`z-30 w-[100%] mx-auto lg:relative ${
          blok.image_left && "order-2"
        }`}
      >
        <div className="text-white text-[100px] lg:text-[260px] opacity-10 font-bold z-20 -mt-36">
          {blok.project_number}
        </div>
        <div className="lg:absolute flex flex-col justify-center h-[20%] lg:left-[8.5rem]">
          <div className="hidden lg:flex justify-start items-center gap-16 w-[60%] mb-4">
            <hr className="w-[20%] border-t-2 border-[#FBD784]" />
            <span className="block text-lg text-[#FBD784]">
              {blok.subtitle}
            </span>
          </div>
          <div className="lg:ml-10 flex flex-col gap-4  ">
            <h2 className="text-white uppercase text-[64px] text-center lg:text-start">
              {blok.title}
            </h2>
            <div className="project-info w-[90%] mx-auto lg:mx-0 text-center lg:text-start">
              {render(blok.project_info)}
            </div>

            <div className="flex gap-4 mt-6 text-white text-[14px] font-light flex-wrap">
              {blok.technology.map((item: any) => (
                <div className="technology" key={item._uid}>
                  {item.title}
                </div>
              ))}
            </div>
            <div className="text-[#FBD784] font-normal flex gap-2 items-center group cursor-pointer mt-4">
              <Link href={blok.link.cached_url} className="text-[18px]">
                {blok.link_title}
              </Link>
              <IoIosArrowRoundForward
                fontSize={44}
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[350px] h-[350px] lg:w-[730px] lg:h-[535px] z-30 overflow-hidden group">
        <Image
          src={blok.image.filename}
          alt={blok.image.alt}
          className="object-cover object-top rounded-[10px] transition-transform duration-300 ease-in-out group-hover:scale-110"
          fill
        />
      </div>
    </div>
  );
};
 */

import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { IoIosArrowRoundForward } from "react-icons/io";

export const ProjectCard = ({ blok }: any) => {
  return (
    <div className="lg:grid grid-cols-2 w-[95%] mx-auto gap-32 ">
      <div
        className={`z-30 w-[100%] mx-auto lg:relative ${
          blok.image_left && "order-2"
        }`}
      >
        <div className="flex lg:hidden">
          <div className="text-white text-[100px] lg:text-[260px] opacity-10 font-bold z-20 ">
            {blok.project_number}
          </div>
          <div className="flex lg:hidden justify-start items-center gap-4 w-[60%] -ml-12 mt-2">
            <hr className="w-[20%] border-t-2 border-[#FBD784] z-30" />
            <span className="block text-lg text-[#FBD784] z-30">
              {blok.subtitle}
            </span>
          </div>
        </div>
        <div className="hidden lg:block text-white text-[100px] lg:text-[260px] opacity-10 font-bold z-20 -mt-36">
          {blok.project_number}
        </div>
        <div className="lg:absolute flex flex-col justify-center h-[20%] lg:left-[8.5rem]">
          <div className="hidden lg:flex justify-start items-center gap-16 w-[60%] mb-4">
            <hr className="w-[20%] border-t-2 border-[#FBD784]" />
            <span className="block text-lg text-[#FBD784]">
              {blok.subtitle}
            </span>
          </div>
          <div className="lg:ml-10 flex flex-col gap-4 w-[95%] mx-auto lg:w-[100%] lg:mx-0">
            <h2 className="text-white uppercase text-[40px] lg:text-[64px] lg:text-start -mt-4 lg:mt-0">
              {blok.title}
            </h2>
            <div className="project-info w-[100%] lg:w-[90%] mx-auto lg:mx-0 lg:text-start">
              {render(blok.project_info)}
            </div>

            <div className="flex gap-4 mt-6 text-white text-[14px] font-light flex-wrap">
              {blok.technology.map((item: any) => (
                <div className="technology" key={item._uid}>
                  {item.title}
                </div>
              ))}
            </div>
            <div className="hidden text-[#FBD784] font-normal lg:flex gap-2 items-center group cursor-pointer mt-4">
              <Link href={blok.link.cached_url} className="text-[18px]">
                {blok.link_title}
              </Link>
              <IoIosArrowRoundForward
                fontSize={44}
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[350px] mx-auto h-[350px] lg:w-[730px] lg:h-[535px] z-30 overflow-hidden group mt-10 lg:mt-0">
        <Image
          src={blok.image.filename}
          alt={blok.image.alt}
          className="object-cover object-top rounded-[10px] transition-transform duration-300 ease-in-out group-hover:scale-110"
          fill
        />
      </div>
      <div className="lg:hidden text-[#FBD784] font-normal flex gap-2 items-center group cursor-pointer mt-4 w-[95%] mx-auto">
        <Link href={blok.link.cached_url} className="text-[18px]">
          {blok.link_title}
        </Link>
        <IoIosArrowRoundForward
          fontSize={44}
          className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"
        />
      </div>
    </div>
  );
};
