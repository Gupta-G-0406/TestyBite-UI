import { useState } from "react";
import ItemLists from "./ItemLists";

const RestaurantCategory = ({data,showItem,setShowIndex}) => {

    const hideItems = () =>{
        setShowIndex();
    }
    
    return (
        <div>
            <div className="w-6/12 h-15 mx-auto my-4 bg-gray-100 p-3 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={hideItems}>
                    <span className=" font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>🔽</span>
                </div>
                <div>
                {showItem && <ItemLists items={data.itemCards} />}
                </div>
            </div>
            
        </div>
    )
}

export default RestaurantCategory;