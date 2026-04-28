import type {  APIResponse } from "../types/products.types"
interface HomeProps{
  searchParams: Promise<{ search?: string}>
}
export default async function Home({ searchParams}: HomeProps) {

  const {search} = await searchParams

  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-transparent">
        
       <h1 className="text-3xl mb-10 mt-8">Explore our products</h1>
         
          
    </div>
  );
}
