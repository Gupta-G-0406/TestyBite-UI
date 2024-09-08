import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { APP_API } from "../utils/constants";


const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurant, setfilteredRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");
    const onlineStatus = useOnlineStatus();


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(APP_API);
        const json = await data.json();
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // console.log(listOfRestaurants);

    
    if(onlineStatus === false){
        return(
        <div>
            <h1>Oops!! Look Like you are not connected</h1>
            <h2>Check your internet Connection</h2>
        </div>
        )
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex items-center">
                <div className="m-4 p-4">
                    <input 
                        className="px-1 border border-solid border-black transition hover:shadow-xl hover:bg-gray-100 delay-150 duration-300" 
                        type="text"
                        value={searchText}
                        onChange={(e) => {
                            setsearchText(e.target.value)
                        }}
                    />
                    <button className="px-4 py-1 mx-2 bg-green-50 rounded-lg transition hover:shadow-xl hover:bg-green-100 delay-150 duration-300"
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setfilteredRestaurants(filteredRestaurant);
                        }}>search</button>
                </div>
                <div className="button p-4">
                <button
                    className="px-4 py-1 bg-gray-200 rounded-lg transition hover:shadow-xl hover:bg-gray-100 delay-150 duration-300"
                    onClick={() => {
                        console.log("clicked");
                        const filterList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setfilteredRestaurants(filterList);
                    }}
                >Top rated restaurant
                </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restraunt) =>
                    <Link key={restraunt.info.id}
                     to={"/restaurant/"+restraunt.info.id}>
                     <ResturantCard resData={restraunt} />
                     </Link>
                )}

            </div>
        </div>
    );
}

export default Body;