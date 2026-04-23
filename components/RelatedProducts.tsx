import Link from "next/link"
import { APIResponse, Product } from "@/types/products.types"

async function RelatedProducts({category} : { category: string}){

      const catResponse = await fetch(`https://dummyjson.com/products/category/${category}?limit=5`)
    const  data : APIResponse = await catResponse.json()
    const {products}  = data
    return(
        <>
        <h2 className="text-base mb-2 border-b-1">Related Products</h2>
        <ul>
             {
                products.map( ({id, title, thumbnail, price}: Product) => {
                    return  (<li className="grid grid-cols-[40%_1fr] gap-2 my-1" key={id}>
                        <Link href={`/product/${id}`}>
                        <img src={thumbnail} alt={title} />
                        </Link> 
                        <div className="flex flex-col justify-center">
                            <Link href={`/product/${id}`}>
                                <h3 className="text-base hover:underline">{title}</h3>
                            </Link>
                            <span className="text-[12px]">{price}</span>
                        </div>
                        </li>)
                })
            }
           
        </ul>
        </>
    )
}

export {RelatedProducts}