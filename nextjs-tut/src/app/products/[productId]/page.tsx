import {Metadata} from "next"

type Props = {
    params: {
        productId: string;
    }
}

export const generateMetadata = async ({
    params,
}: Props) : Promise<Metadata> => {
    const title = await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        },100)
    })
    return {
        title: `Product ${params.productId}`
    }
}



export default function ProductDetails(
    { params}: Props) {
    return  <h1>Details about product {params.productId}</h1>
    
}

