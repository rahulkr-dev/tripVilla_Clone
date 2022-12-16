import list from "../../Components/HomePage/restorant.json"

import { SEARCH_LOACTION_RESULT, SEARCH_START, SEARCH_ALL_NECESSARY_DATA } from './search.type';
const init = {
    data:list,
    isVarified:false,
    searchData:{
        location:"",
        checkIn:"",
        checkOut:"",
        guests:0
    }
}

export const searchReducer = (state=init,{type,payload})=>{
    // console.log('payload',payload)
    switch(type){
        case SEARCH_START:{
            let filter = list.filter(item=>{
                return item.cuisine.includes(payload) || item.name.includes(payload)
            })
            return {
                data:filter
            }
        }
        case SEARCH_LOACTION_RESULT:{
          
            return {
                ...state,
                searchData:{
                    ...state.searchData,
                    loaction:payload
                }
            }
        }
        case SEARCH_ALL_NECESSARY_DATA:{
            return{
                ...state,
                isVarified:true,
                searchData:payload
            }
        }
        default : return state
    }

}