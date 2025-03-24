import { useEffect } from "react"
import {
    FOODFIRE_MENU_API_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
  } from "../../../public/Common/constants";
const useRestaurantMenu =(resId) =>{
const[resInfo,setResInfo] = useState(null)
   const useRestaurantMenu=(resId)=>{
    useEffect(()=>{
      fetchData()
    },[])
   }
        const fetchData = async()=>{
            const data = await fetch(MENU_API + resId);
            const json = await data.json;
            setResInfo(json.data);
        }
 return resInfo
}

export default useRestaurantMenu