"use client";
import { storyblokInit } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import page from "./page";
import { Teaser } from "./storyblok/teaser";

storyblokInit({
  components: {
    page: page,
    teaser: Teaser,
  },

  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
