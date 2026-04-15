"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

function Search(){
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams() //readonly
  
    
    const handleSearch = useCallback((searchText: string) => {
        const params = new URLSearchParams(searchParams.toString()) //changeable
        if(searchText){
            params.set("search", searchText)
        }else{
           params.delete("search")
        }
        router.push(`${pathname}/?${params.toString()}`)
    }, [searchParams])

    return(
        <div className="flex">
        <label htmlFor="searchText" className="mr-3">SEARCH</label>
        <input type="text"
        className="bg-white text-black"
                defaultValue={searchParams.get("search")?.toString()}
                placeholder="Annibale Colombo Sofa..." 
                onChange={(e) => handleSearch(e.currentTarget.value)}/>
        </div>
    )
    
}

export {Search}