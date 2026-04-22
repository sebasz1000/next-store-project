import { Product } from "@/types/products.types";

interface ProductPageProps{
    params: Promise<{ id: string }>;
}
export default async function ProductPage({ params }:ProductPageProps){

    const {id} = await params
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const {title, description, thumbnail, category}: Product = await response.json()
    const uppercasedCategory = category.charAt(0).toUpperCase() + category.slice(1)
    return (<>
    <img src={thumbnail} alt={title} className="w-80" />
        <h1 className="text-3xl">{title}</h1>
        <span className="text-2xl">{uppercasedCategory}</span>
        <p>{description}</p>
    </>)
}