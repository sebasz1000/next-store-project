import { Product } from "@/types/products.types";

interface ProductPageProps{
    params: Promise<{ id: string }>;
}
export default async function ProductPage({ params }:ProductPageProps){

    const {id} = await params
    const response = await fetch(`https://dummyjson.com/products/1`)
    const {title, description, thumbnail, category}: Product = await response.json()
    console.log(id)
    return (<>
    <img src={thumbnail} alt={title} className="w-80" />
        <h1 className="text-3xl">{title}</h1>
        <p>{description}</p>
    </>)
}