
import { Metadata } from "next";
import Content from "./content"
import { BuildPageMeta } from "@/app/metaDefaults";
export const metadata: Metadata = BuildPageMeta({
    title: "Curriculum Vitae - Keegan Bruer",
    description: "Review my CV or download a copy to share with your network.",
    url:"/CV"
})
export default () => {
  return (
    <div>
        <Content />
    </div>
  );
}
