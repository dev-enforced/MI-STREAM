import axios from "axios";
const receiveAllCategories=async ()=>{
    try{
        const categoriesResponse=await axios.get("/api/categories");
        return categoriesResponse;
    }catch(categoriesResponseError){
        console.error("ERROR OCCURED WHILE RECEIVING CATEGORIES FROM API CALL")
    }
}
export {receiveAllCategories}