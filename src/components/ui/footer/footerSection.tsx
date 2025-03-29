"use client";

import { Form } from "@/components/form/form";
import { Socials } from "@/components/socials/socials";
import { render } from "storyblok-rich-text-react-renderer";

export const FooterSection = ({ settings }: any) => {
  return (
    <footer id="contact" className="bg-[#0B1D26] pb-14">
      <div className="lg:grid grid-cols-2 w-[90%] lg:w-[95%] mx-auto py-10">
        <div>
          <div className="flex items-center gap-10 text-[#FBD784]">
            <hr className="w-[10%] border-t-2 border-[#FBD784]" />
            <span className="text-[18px]">{settings.subtitle}</span>
          </div>
          <h2 className="text-[40px] lg:text-[64px] text-white">
            {settings.title}
          </h2>
          <div className="footer-info lg:w-[50%]">
            {render(settings.content)}
          </div>
          <div className="mt-6">
            <Socials props={settings.links} color={"white"} size={25} />
          </div>
        </div>

        <div className="mt-10 lg:mt-0">
          <Form settings={settings} />
        </div>
      </div>
    </footer>
  );
};
