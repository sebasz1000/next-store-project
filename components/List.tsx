"use client"
import { searchProducts } from "@/app/actions/search";
import { Product } from "@/types/products.types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


function List(){
    const [products, setProducts] = useState<Product[]>([])
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get("search") ?? ""
    useEffect(() => {
        searchProducts(searchQuery)
            .then(setProducts)
    }, [searchQuery])


    if(!(searchQuery.length > 0)) return null;

    return(
      <ul className="mt-6 absolute top-5 left-0 w-80 bg-slate-200 -translate-x-1/7 px-3 py-2 max-h-[550px] overflow-y-auto b-local">
        {
            products.map( ({title, id, thumbnail, category}, key) => { 
                const catLabel = category.charAt(0).toUpperCase() + category.slice(1)
                const isLastElement = (products.length - 1) === key
                const borderString = !isLastElement ? "border-b-1  border-b-slate-500" : ""
                return (
                <li key={id} 
                    className={`flex align-center ${borderString} mb-1 pb-1`}>
                    <img src={thumbnail} alt={title} className="w-18 mr-2" />
                    <div className="flex flex-col justify-center">
                        <Link href={`/product/${id}`} >
                            <h3 className="text-md hover:underline">{title}</h3>
                        </Link>
                    <span className="text-xs text-slate-500">{catLabel}</span>
                    </div>
                </li> 
            )})
        }
       </ul>
)
}

export { List }