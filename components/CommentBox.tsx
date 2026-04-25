"use client"

import { commentAction } from "@/app/product/[id]/actions"
import { ActionStateType } from "@/types/products.types"
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

    <form action={formAction} className="flex flex-col py-2 justify-center w-full align-center px-10">
            <textarea name="comment-input" rows={10} cols={50}  className="bg-white text-black p-5" placeholder="This is great!"/>
            <button disabled={isPending} 
                    type="submit" 
                    className={`border-1 border-pink py-3 my-3 ${buttonClassName}`}>
                        Comment
            </button>
        </form>
        { state.error ? <h4>Upsss!!</h4> : ""}
        { haveMessage ? <p>{state.message}</p> : ""}
        </>
        )
}

export {CommentBox}