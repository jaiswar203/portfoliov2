import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"
import { useNextSanityImage } from "next-sanity-image";

export const client=SanityClient({
    projectId:"ikalqavw",
    dataset:"production",
    apiVersion:"2022-09-15",
    useCdn:true,
    token: process.env.NEXT_PUBLI_SANITY_TOKEN

})

const builder=imageUrlBuilder(client)

export const urlFor=(source)=>builder.image(source)



export const ImageUrl=(url)=>{
    const imageProps=useNextSanityImage(client,url)

    return imageProps
}