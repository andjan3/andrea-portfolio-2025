import { useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import { SlArrowDown } from "react-icons/sl";

export const Skills = ({ item }: any) => {
  const [openDropdown, setOpenDropdown] = useState("");

  const handleDropdown = (id: any) => {
    setOpenDropdown(openDropdown ? null : id);
  };

  return (
    <div
      key={item._uid}
      className="lg:w-[50%] cursor-pointer"
      onClick={() => handleDropdown(item._uid)}
    >
      <div className="flex items-center text-white justify-between py-2 border-b-[1px] ">
        <h4>{item.title}</h4>

        <SlArrowDown
          className={`mr-2 ${openDropdown == item._uid && "rotate-180"}`}
        />
      </div>

      {openDropdown == item._uid && (
        <div className="grid grid-cols-2">
          <div className="project-info mt-4">{render(item.content)}</div>
          <div className="project-info mt-4">{render(item.second_content)}</div>
        </div>
      )}
    </div>
  );
};
