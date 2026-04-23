import Link from "next/link"
import { RelatedProducts } from "@/components"
import {  Product } from "@/types/products.types"
import { Suspense } from "react"
export default async function RootLayout({
    children, 
    params
}:{
    children: React.ReactNode,
    params : Promise <{ id: string}>
}){
    const { id } = await params
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const { category }: Product = await response.json()
  
    return (
        <section>
        <Link href="/" className="text-sm">← Back to store</Link>
        <h1 className="mt-4">Product Detail Page</h1>
        <div className="grid grid-cols-[65%_1fr] gap-8 w-full border-1 border-white">
            <div className="">
                {children}
            </div>
            <div className=" border-1 border-white">
                 <Suspense fallback={<p>Loading Related...</p>}>
                    <RelatedProducts category={category}/>
                </Suspense>
            </div>
        </div>
        </section>
    )
}