"use client";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import Link from "next/link";
import { useState } from "react";
import { Socials } from "@/components/socials/socials";

export const Navigation = ({ settings }: any) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex lg:grid grid-cols-3 justify-between items-center w-[100%] absolute top-0 left-0 z-20 text-white p-8 lg:p-12 ">
      <Link href={"#"} className="text-[32px]">
        ANJ
      </Link>

      <CiMenuFries
        className="block lg:hidden"
        fontSize={40}
        onClick={() => handleMenu()}
      />
      <div
        className={`fixed flex-col h-[100vh] w-full left-0 top-0 z-50 bg-white gap-5 p-10 transition-all duration-500 right-0 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <IoMdClose
            fontSize={40}
            className="text-black"
            onClick={() => handleMenu()}
          />
        </div>
        <ul className="flex flex-col gap-5 items-center mt-20">
          {settings.menu.map((item: any) => (
            <Link
              href={item.link.cached_url}
              key={item._uid}
              className="text-black text-[26px]"
              onClick={() => handleMenu()}
            >
              {item.link_title}
            </Link>
          ))}
          <div className="mt-10">
            <Socials props={settings.links} color={"black"} size={25} />
          </div>
        </ul>
      </div>
      <ul className="hidden lg:flex justify-center gap-8 text-lg">
        {settings.menu.slice(0, 3).map((item: any) => (
          <Link href={item.link.cached_url} key={item._uid}>
            {item.link_title}
          </Link>
        ))}
      </ul>

      <ul className="hidden text-lg lg:flex justify-end">
        {settings.menu.slice(3, 4).map((item: any) => (
          <Link href={item.link.cached_url} key={item._uid}>
            {item.link_title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
