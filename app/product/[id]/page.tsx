import { CommentBox } from "@/components";
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
        <h1 className="text-3xl mb-0 mt-3">{title}</h1>
        <span className="text-sm text-slate-500">{uppercasedCategory}</span>
        <img src={thumbnail} alt={title} className="w-full" />
        <p className="mt-4">{description}</p>
        
        <CommentBox />
    </div>)
}