"use client"

import { commentAction } from "@/app/product/[id]/actions"
import { ActionStateType } from "@/types/products.types"
import { Loader } from "lucide-react"
import { useActionState } from "react"


const initActionState: ActionStateType = {
    message: "",
    error: false
}
function CommentBox(){
    const [state, formAction, isPending ] = useActionState(commentAction, initActionState)

    console.log("Peding: " + isPending)

    const buttonClassName = isPending ? "border-zinc-700 text-zinc-700" : "" 
    const haveMessage = state.message.length > 0
   
    return     (
        <>
            <div className="bg-violet-800 h-1 w-50 mt-10 "></div>
            <div className="bg-slate-200 w-full">
                <h3 className="text-lg text-violet-900 mt-4 mb-2 ml-3">What do you think?</h3>
                <form action={formAction} className="flex flex-col py-2 justify-center align-center w-80 m-auto ">
                    <textarea name="comment-input" rows={8}  className="bg-white text-black p-5 w-full resize-y max-w-screen-md" placeholder="This is great!"/>
                    <button disabled={isPending} 
                            type="submit" 
                            className={`bg-violet-800 disabled:text-violet-400 disabled:bg-violet-300  text-white rounded-lg font-bold py-3 mt-5 ${buttonClassName}`}>
                                {isPending ? <Loader className="mx-auto" />: "Comment"}
                    </button>
                </form>
                {
                    haveMessage ? <MessageBox isError={state.error} text={state.message}/> : null
                }
                
            </div>
        </>)
}

function MessageBox({isError, text} : { isError: boolean, text: string}){
     const messageBoxClass = isError ? "bg-amber-500" : "bg-lime-500"
    return(
        <div className={`${messageBoxClass} mx-3 my-2 p-2`}>
             { isError ? <h4 className="text-gray-900 font-bold text-sm">Upsss!!</h4> : ""}
            <p className="text-gray-900 text-sm">{text}</p>
            </div>
    )
}

export {CommentBox}