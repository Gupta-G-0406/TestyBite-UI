import { useDispatch } from "react-redux";
import { RES_LOGO } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemLists = ({items}) =>{

    const dispatch = useDispatch();

    const handleAdditem = (item)=>{
        dispatch(addItem(item));
    }

    return(
    <div>
       {items.map((item)=>(
        <div className="text-left p-4 border-gray-300 border-b-2 flex justify-between" key={item.card.info.id}>
        <div className="w-9/12">
            <div className="font-bold py-2">
                {item.card.info.name} - ₹{item.card.info.price/100|| item.card.info.defaultPrice/100}
            </div>
            <p className="text-xs">{item.card.info.description}</p>
        </div>
            <div className="w-3/12 p-4">
                <div className="absolute">
                    <button className="bg-black text-white text-sm p-1 rounded-lg"
                        onClick={() =>handleAdditem(item)}>
                        Add+
                    </button>
                </div>
                <img className="rounded-lg" src={RES_LOGO + item.card.info.imageId}/>
                
                
            </div>
       </div>
       
    ))} 
    </div>
    )
}
export default ItemLists;