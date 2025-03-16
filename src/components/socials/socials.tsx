"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export const Socials = ({ props }: any) => {
  return (
    <div className="flex gap-2">
      {props.map((item: any) => {
        const Icons = (size: any) => {
          switch (item.option) {
            case "linked_in":
              return (
                <FaLinkedinIn fontSize={size.size} className="text-white" />
              );
            case "github":
              return <FaGithub fontSize={size.size} className="text-white" />;

            default:
              "";
          }
        };
        return (
          <Link href={`${item.link.cached_url}`} key={item._uid}>
            <Icons size="20" />
          </Link>
        );
      })}
    </div>
  );
};
