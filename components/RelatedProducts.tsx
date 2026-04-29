import Link from "next/link"
import { APIResponse, Product } from "@/types/products.types"

async function RelatedProducts({category} : { category: string}){

      const catResponse = await fetch(`https://dummyjson.com/products/category/${category}?limit=5`)
    const  data : APIResponse = await catResponse.json()
    const {products}  = data
    return(
        <div className="bg-violet-800 py-5 px-3">
        <h2 className="text-base mb-2 text-white text-xl">Related Products</h2>
        <div className="bg-violet-100 h-1 w-full mb-4"></div>
        <ul>
             {
                products.map( ({id, title, thumbnail, price}: Product) => {
                    return  (<li className="grid grid-cols-[35%_1fr] gap-1 my-1" key={id}>
                        <Link href={`/product/${id}`}>
                        <img src={thumbnail} alt={title} />
                        </Link> 
                        <div className="flex flex-col justify-center">
                            <Link href={`/product/${id}`}>
                                <h3 className="text-base text-white hover:underline">{title}</h3>
                            </Link>
                            <span className="text-[12px] text-slate-300">${price}/usd</span>
                        </div>
                        </li>)
                })
            }
           
        </ul>
        </div>
    )
}

export {RelatedProducts}