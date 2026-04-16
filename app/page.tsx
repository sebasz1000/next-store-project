import {List, Search} from "@/components"
import type {  APIResponse } from "../types/products.types"
import { Suspense } from "react"
interface HomeProps{
  searchParams: Promise<{ search?: string}>
}
export default async function Home({ searchParams}: HomeProps) {

  const {search} = await searchParams

  const URL = search 
              ? `https://dummyjson.com/products/search?q=${search}`
              :  "https://dummyjson.com/products"

  const response = await fetch(URL)
  const data: APIResponse = await response.json()
  const {products} = data 
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
       <h1 className="text-3xl mb-10">STORE!!</h1>
          <Suspense fallback={<div>Loading Searcher....</div>}>
            <Search />
          </Suspense>
          <List products={products} />
      </main>
    </div>
  );
}
