"use server"

import { ActionStateType } from "@/types/products.types"

const commentAction = async (prevState: ActionStateType, formData: FormData): Promise<ActionStateType> => {


    const rawData = formData.get("comment-input")
    const comment = (typeof rawData === "string") ? rawData : ""
    console.log(prevState)
    await new Promise( res => setTimeout(res, 3000))

    if(comment.length < 4){
        return {
            message: "The comment is too short. Please write more!",
            error: true
        }
    }

    return {
        message: `Thanks for your comment!`,
        error: false
    }
}



export { commentAction}
















/*interface ActionStateType {
    message: string;
    error: boolean;
}
const commentAction = async (prevState: ActionStateType, formData: FormData ): Promise<ActionStateType> => {
    if(!formData){
          return {
                message: "ERROR: Action NOT dispatched",
                error: true
            }
    }

    let commentText : FormDataEntryValue | null   = ""

    if(typeof formData.get("comment-input") === "string"){
        commentText = formData.get("comment-input")
    }  
    
    await new Promise( res => setTimeout(res, 5000))

    return {
        message: `Action dispatched with commentary --> ${commentText}`,
        error: false
    }
}

export  {commentAction}*/