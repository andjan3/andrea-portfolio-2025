export const ProjectBlock = ({ blok }: any) => {
  console.log(blok);
  return (
    <main className="bg-[#0B1D26] h-[800px]">
      <div className="absolute top-[100%] w-[100%] h-[16vh] bg-black/85 blur-lg"></div>

      <div className="z-30 w-[95%] mx-auto relative">
        {blok.project_field.map((item: any, index: number) => (
          <div key={index}>
            <div className="text-white text-[260px] opacity-30 font-bold z-20 -mt-44">
              {item.project_number}
            </div>

            <div className="absolute top-52  left-[8.5rem]   ">
              <div className="flex justify-start items-center gap-16 w-[60%]">
                <hr className="w-[18%] border-t-2 border-[#FBD784]" />
                <span className="block text-lg text-[#FBD784]">
                  {item.subtitle}
                </span>
              </div>
              <div className="ml-10">
                <h2 className="text-white uppercase text-[64px]">
                  {item.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
