import Link from "next/link"
import { List, SearchBar } from "@/components";
import { Home, Loader, ShoppingCart } from "lucide-react";
import { Suspense } from "react";

async function Header(){
    return(
         <nav className="px-4 py-4 flex justify-between align-center ">
          <Link href="/" className="self-center" >
            <Home className='text-slate-400' size={24}/>
          </Link>
          <Suspense fallback={<Loader className='text-slate-200'  size={24}/>}>
            <SearchBar >
               <List />
            </SearchBar>
          </Suspense>
          <Link href="/ " className="self-center ">    
            <ShoppingCart className='text-slate-400'  size={24}/>
          </Link>
        </nav>
    )
}

export { Header }