import { Products } from "@/types/products.types";

interface ListProps{
    products: Products[]
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
                    <h3 className="text-2xl">{title}</h3>
                    <span>{catLabel}</span>
                    </div>
                </li> 
            )})
        }
       </ul>
)
}

export { List }