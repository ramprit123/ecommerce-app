import { defineLive } from "next-sanity";
import { client } from "./client";

// Ensure you have an environment variable for the backend token
const token = process.env.SANITY_READ_TOKEN;

if (!token) {
  console.error("Missing SANITY_API_TOKEN environment variable.");
}

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: "vX",
  }),
  serverToken: token,
  browserToken: token,
  fetchOptions: {
    revalidate: 0,
  },
});
