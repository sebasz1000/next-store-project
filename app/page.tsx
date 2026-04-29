import Link from "next/link";
import type {  APIResponse } from "../types/products.types"
import { getAllProducts } from "./actions/search";
interface HomeProps{
  searchParams: Promise<{ search?: string}>
}
export default async function Home({ searchParams}: HomeProps) {

  const {search} = await searchParams
  const featuredProducts = await getAllProducts({ limit: 5})
  
  return (
    <div className="flex flex-col bg-zinc-50 font-sans dark:bg-transparent">
        
       <h1 className="text-4xl text-violet-800 text-left mb-2 text-left "><span className="text-3xl font-light">Products</span> <br/>
         Made for you! </h1>
       <p className="text-sm text-slate-800">Expore out  thousand of products with you in our mind. Dont be shame!</p>
       
      <section className="py-6">
        <div className="bg-violet-800 w-24 h-1 mb-2"></div>
        <h2 className="text-lg mb-1 text-slate-600">Featured products</h2>
        <ul className="mx-3">
          {
              featuredProducts.map( ({title, thumbnail, price, id}) => {
                return <li className="bg-red-400 p-5  rounded-xl relative my-4" key={id}>
                  <Link href={`/product/${id}`} >
                 <h3 className="text-white text-lg hover:underline font-medium">{title}</h3>
                 </Link>
                 <span className="text-white font-bold">${price}/usd</span>
                  <Link href={`/product/${id}`} >
                 <img src={thumbnail} alt={title} className="" />
                 </Link>
                </li>
              })
          }
        </ul>
      </section>

    </div>
  );
}
