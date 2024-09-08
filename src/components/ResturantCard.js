import { RES_LOGO } from "../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData.info;
    return (
        <div className="p-2 m-2 w-[230px] h-[400px] bg-gray-100 transition hover:shadow-xl hover:bg-gray-200 delay-50 duration-100">
            <img className="w-[100%] h-1/2"
                src={RES_LOGO + cloudinaryImageId}
                alt="resturant-img"
            />
            <h3 className="font-bold my-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rating - {avgRating}⭐</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default ResturantCard;