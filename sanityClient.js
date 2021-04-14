import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "nzc16kwt",
  dataset: "production",
  useCdn: false,
});
