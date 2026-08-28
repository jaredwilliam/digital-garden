// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://www.jaredkorba.com',
	markdown: {
		shikiConfig: {
			// Light token colors; the slab background is themed in global.css.
			theme: 'min-light',
			wrap: false,
		},
	},
});
