import { createClient, createImageUrlBuilder, createPortableTextComponent } from "next-sanity"

const config = {
  projectId: "pdysj3tf",
  dataset: "production",
  apiVersion: 'v2021-10-21',
  useCdn: false 
}

export const sanityClient = createClient(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const PortableText = createPortableTextComponent({...config, serializers: {}})