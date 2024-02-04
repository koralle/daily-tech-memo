import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	integrations: [starlight()],
});
