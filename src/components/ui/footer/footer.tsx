import { getSettings } from "@/lib/actions/get-settings";
import { FooterSection } from "./footerSection";

export const Footer = async () => {
  const settings = await getSettings();
  return (
    <>
      <FooterSection settings={settings.content} />
    </>
  );
};
