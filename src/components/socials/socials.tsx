"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export const Socials = ({ props, color, size }: any) => {
  return (
    <div className="flex gap-3">
      {props?.map((item: any) => {
        const Icons = () => {
          switch (item?.option) {
            case "linked_in":
              return <FaLinkedinIn fontSize={size} style={{ color }} />;
            case "github":
              return <FaGithub fontSize={size} style={{ color }} />;

            default:
              "";
          }
        };
        return (
          <Link href={`${item?.link?.cached_url}`} key={item._uid}>
            <Icons />
          </Link>
        );
      })}
    </div>
  );
};
