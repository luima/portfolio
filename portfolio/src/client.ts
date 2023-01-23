import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = sanityClient({
  projectId: import.meta.env.VITE__SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-01-22",
  useCdn: true,
  token: import.meta.env.VITE__SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
