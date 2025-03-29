import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { IoIosArrowRoundForward } from "react-icons/io";

export const ProjectCard = ({ blok }: any) => {
  return (
    <div className="grid grid-cols-2 w-[95%] mx-auto gap-32 ">
      <div
        className={`z-30 w-[100%] mx-auto relative ${
          blok.image_left && "order-2"
        }`}
      >
        <div className="text-white text-[260px] opacity-10 font-bold z-20 -mt-36">
          {blok.project_number}
        </div>
        <div className="absolute top-12 left-[8.5rem]">
          <div className="flex justify-start items-center gap-16 w-[60%]">
            <hr className="w-[20%] border-t-2 border-[#FBD784]" />
            <span className="block text-lg text-[#FBD784]">
              {blok.subtitle}
            </span>
          </div>
          <div className="ml-10 flex flex-col gap-4">
            <h2 className="text-white uppercase text-[64px]">{blok.title}</h2>
            <div className="project-info w-[90%]">
              {render(blok.project_info)}
            </div>

            <div className="flex gap-4 mt-6 text-white text-[14px] font-light">
              {blok.technology.map((item: any) => (
                <div className="technology" key={item._uid}>
                  {item.title}
                </div>
              ))}
            </div>
            <div className="text-[#FBD784] font-normal flex gap-2 items-center group cursor-pointer">
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
      <div className="relative w-[700px] h-[535px] z-30 overflow-hidden group">
        <Image
          src={blok.image.filename}
          alt={blok.image.alt}
          className="object-cover rounded-[10px] transition-transform duration-300 ease-in-out group-hover:scale-110"
          fill
        />
      </div>
    </div>
  );
};
