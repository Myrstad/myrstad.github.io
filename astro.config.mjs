// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://mortenmyrstad.no",
    fonts: [
        {
            name: "Playfair Display SC",
            cssVariable: "--font-display",
            provider: fontProviders.google(),
            weights: [400],
            styles: ["normal"]
        },
        {
            name: "Source Serif 4",
            cssVariable: "--font-body",
            provider: fontProviders.google(),
            weights: [400],
            styles: ["normal", "italic"]
        }
    ]
});
