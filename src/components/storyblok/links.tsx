import { Socials } from "../socials/socials";

export const Links = ({ blok }: any) => {
  return (
    <div className="hidden absolute lg:flex items-center gap-8 top-[17.5rem] -left-2 z-20 rotate-90">
      <div className="text-white text-lg">Follow</div>
      <Socials props={blok.link} color={"white"} size={20} />
    </div>
  );
};
