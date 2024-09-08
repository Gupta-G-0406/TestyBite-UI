import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantManu"
import { RES_LOGO } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

   const {resId} = useParams();

   const resInfo = useRestaurantMenu(resId);
   const [showIndex , setShowIndex] = useState(null);


    if(resInfo===null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage,logo} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c)=>c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold text-xl my-2">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} : {costForTwoMessage}</p>

            {categories.map((category,index)=><RestaurantCategory key={category?.card?.card?.itemCards?.card?.info?.id}
             data={category?.card?.card}
             showItem = {index==showIndex ? true : false}
             setShowIndex = {()=>setShowIndex(index)}
             />)}
        </div>
        
    )
}

export default RestaurantMenu;