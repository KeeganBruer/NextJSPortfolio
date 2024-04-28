import { BuildPageMeta } from "@/app/metaDefaults"
import { ArticleMeta } from "../../src/app/(Pages)/Deepdive/[...article]/content"

export const articleInfo:ArticleMeta = {
  title: "About Me - Most Impactful Aspects of Software Engineering",
  description: "About Me - Get to know me through short essays about a multitude of topics.",
  date: new Date("04/05/2024"),
  readTime: "2 min",
  link: "/Deepdive/AboutMe/MostImpactful",
}

export const PageMeta = BuildPageMeta({
  title:articleInfo.title,
  description: articleInfo.description,
  socialCover: articleInfo.cover != undefined ? `https://keeganbruer.com/Deepdive/ArticleCovers/${articleInfo.cover}` : undefined,
  url:"https://keeganbruer.com/Deepdive/AboutMe/MostImpactful"
})