import { useRef, useState } from "react";
import { ProjectCard } from "../ui/project-card";
import { TbDots } from "react-icons/tb";
import { IoIosArrowRoundUp } from "react-icons/io";

export const ProjectBlock = ({ blok }: any) => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const secondContentRef = useRef<HTMLDivElement | null>(null);
  const handleMoreProjects = () => {
    const newState = !showMoreProjects;
    setShowMoreProjects(!showMoreProjects);

    if (!newState && secondContentRef.current) {
      setTimeout(() => {
        window.scrollTo({
          top: 600,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  const renderCategory = (category: string) => {
    return blok.projects
      .filter((item: any) => item.render_category == category)
      .map((project: any) => <ProjectCard key={project._uid} blok={project} />);
  };

  return (
    <main
      id="projects"
      className="bg-[#0B1D26] h-auto flex flex-col gap-10 pb-10 lg:pb-32 -mt-20 lg:mt-0"
    >
      <div className="flex flex-col gap-5 lg:gap-44" ref={secondContentRef}>
        {renderCategory("initial_render")}
        {showMoreProjects && renderCategory("second_render")}
      </div>
      <div className="flex justify-center mt-5 lg:mt-32">
        <button
          className="bg-[#354147] lg:py-2 py-1 px-5 lg:px-7 rounded-[60px]  border-[1px] border-white hover:bg-[#0B1D26]"
          onClick={() => handleMoreProjects()}
        >
          {showMoreProjects ? (
            <IoIosArrowRoundUp fontSize={60} className="text-white" />
          ) : (
            <TbDots fontSize={60} className="text-white" />
          )}
        </button>
      </div>
    </main>
  );
};
