import { Product } from "@/types/products.types";

interface ProductPageProps{
    params: Promise<{ id: string }>;
}
export default async function ProductPage({ params }:ProductPageProps){

    const {id} = await params
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const {title, description, thumbnail, category}: Product = await response.json()
    const uppercasedCategory = category.charAt(0).toUpperCase() + category.slice(1)
    return (<div className="flex flex-col justify-center items-start w-full">
    <img src={thumbnail} alt={title} className="w-90" />
        <h1 className="text-5xl mb-2">{title}</h1>
        <span className="text-lg">{uppercasedCategory}</span>
        <p className="mt-4">{description}</p>
    </div>)
}