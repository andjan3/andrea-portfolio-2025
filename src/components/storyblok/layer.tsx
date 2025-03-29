import Image from "next/image";

export const Layer = ({ blok }: any) => {
  return (
    <Image
      src={blok.layer.filename}
      alt={blok.layer.alt}
      width={2000}
      height={400}
      className="absolute top-[600px] lg:top-[450px] z-10"
    />
  );
};
