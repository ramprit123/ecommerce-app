import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Ensure you have an environment variable for the backend token
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("Missing SANITY_API_TOKEN environment variable.");
}

export const backendClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token, // Add the token for write access
  useCdn: false, // Disable CDN for backend operations. This is very important for writes!
  ignoreBrowserTokenWarning: true, //prevents a warning in the console.
});
