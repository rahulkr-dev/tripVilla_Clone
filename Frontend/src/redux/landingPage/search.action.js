import { SEARCH_ALL_NECESSARY_DATA, SEARCH_LOACTION_RESULT, SEARCH_START } from "./search.type"

export const search_from_homePage = (payload)=>{
    return {
        type:SEARCH_START,
        payload
    }
}
export const searchLocationResult = (payload)=>{
    return {
        type:SEARCH_LOACTION_RESULT,
        payload
    }
}

export const searchFinalData = (payload)=>{
    return {
        type:SEARCH_ALL_NECESSARY_DATA,
        payload
    }
}