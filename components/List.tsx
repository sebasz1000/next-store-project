import { Product } from "@/types/products.types";
import Link from "next/link";

interface ListProps{
    products: Product[]
}

async function List({ products }:ListProps){
    
return(
      <ul>
        {
            products.map( ({title, id, thumbnail, category}) => { 
                const catLabel = category.charAt(0).toUpperCase() + category.slice(1)
                return (
                <li key={id} className="flex align-center">
                    <img src={thumbnail} alt={title} className="w-40 mr-5" />
                    <div className="flex flex-col justify-center">
                        <Link href={`/product/${id}`} >
                            <h3 className="text-2xl hover:underline">{title}</h3>
                        </Link>
                    <span>{catLabel}</span>
                    </div>
                </li> 
            )})
        }
       </ul>
)
}

export { List }