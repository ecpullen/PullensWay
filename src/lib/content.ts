import { getCollection } from "astro:content";

export async function getPageBySlug(slug: string) {
  const pages = await getCollection("pages");
  return pages.find((page) => page.slug === slug);
}

export async function getGuideEntries() {
  const guides = await getCollection("guides");
  return guides.sort((a, b) => a.data.title.localeCompare(b.data.title));
}
