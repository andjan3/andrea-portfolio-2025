import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import { Skills } from "./ui/skills";

export const About = ({ blok }: any) => {
  return (
    <section id="about" className="bg-[#0B1D26] pb-10 lg:pb-32">
      <div className="lg:grid grid-cols-2 w-[90%] lg:w-[95%] mx-auto">
        <div>
          <div className="pt-16 lg:pt-0 flex justify-start items-center gap-16 w-[60%] mb-4">
            <hr className="w-[20%] border-t-2 border-[#FBD784]" />
            <h2 className="block text-lg text-[#FBD784]">{blok.subtitle}</h2>
          </div>
          <div className="-mt-12 lg:mt-0 flex  flex-col justify-center items-center">
            <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] mt-20 ">
              <Image
                src={blok.image.filename}
                alt={blok.image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div id="skills" className="w-[100%] h-[100%] mt-10 lg:mt-20">
          <div>
            <h3 className="text-white uppercase text-[40px] lg:text-[64px] lg:text-start -mt-4 text-center lg:mt-0 lg:w-[20%]">
              {blok.title}
            </h3>
            <div className="project-info mt-5 lg:mt-10 text-center lg:text-start lg:w-[80%]">
              {render(blok.content)}
            </div>

            <div className="flex flex-col gap-5  pt-10">
              {blok.skills_field.map((item: any) => (
                <Skills item={item} key={item._uid} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
