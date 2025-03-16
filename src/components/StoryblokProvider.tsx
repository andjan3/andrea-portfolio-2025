"use client";
import { storyblokInit } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import page from "./page";
import { Hero } from "./storyblok/hero";
import { Links } from "./storyblok/links";

storyblokInit({
  components: {
    page: page,
    hero: Hero,
    links: Links,
  },

  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
