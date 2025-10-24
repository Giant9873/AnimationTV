// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity/live";
import { client } from './client'

interface QueryOptions {
  query: string;
  params?: { [key: string]: any }; // O el tipo de tus parámetros
  revalidate?: number; // 👈 Agrega esta propiedad
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
});