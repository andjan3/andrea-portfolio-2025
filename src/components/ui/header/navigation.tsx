"use client";

import Link from "next/link";

export const Navigation = ({ settings }: any) => {
  return (
    <nav className="grid grid-cols-3 justify-between items-center w-[100%] absolute top-0 left-0 z-20 text-white p-12 ">
      <Link href={"#"} className="text-[32px]">
        ANJ
      </Link>

      <ul className="flex justify-center gap-8 text-lg">
        {settings.menu.slice(0, 3).map((item: any) => (
          <Link href={"#"} key={item._uid}>
            {item.link_title}
          </Link>
        ))}
      </ul>

      <ul className="text-lg flex justify-end">
        {settings.menu.slice(3, 4).map((item: any) => (
          <Link href={"#"} key={item._uid}>
            {item.link_title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
