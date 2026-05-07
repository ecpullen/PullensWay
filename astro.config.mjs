import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repository.endsWith(".github.io");
const site =
  process.env.SITE_URL || "https://ecpullen.github.io";
const base =
  process.env.BASE_PATH || (repository && !isUserSite ? `/${repository}` : "/");

export default defineConfig({
  site,
  base,
  output: "static"
});
