import { getSettings } from "@/lib/actions/get-settings";
import { Navigation } from "./navigation";

export const Header = async () => {
  const settings = await getSettings();

  return <Navigation settings={settings.content} />;
};
