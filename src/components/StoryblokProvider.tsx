"use client";
import { storyblokInit } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import page from "./page";
import { Hero } from "./storyblok/hero";
import { Links } from "./storyblok/links";
import { ProjectBlock } from "./storyblok/project-block";
import { Layer } from "./storyblok/layer";

storyblokInit({
  components: {
    page: page,
    hero: Hero,
    links: Links,
    layer: Layer,
    projects: ProjectBlock,
  },

  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
