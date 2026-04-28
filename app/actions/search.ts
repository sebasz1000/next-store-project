"use server"

import { APIResponse, Product } from "@/types/products.types"

const  searchProducts = async (searchTextValue : string
): Promise<Product[]>=> {
    if(searchTextValue.length === 0){
        return []
    } 

        const URL = `https://dummyjson.com/products/search?q=${searchTextValue}`
         

        const response = await fetch(URL)
        const data: APIResponse = await response.json()
        const {products} = data 
        return products
    } 
export {searchProducts}