import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";


const Header = () => {
 
    const[btnName,setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    

    return (
        <div className="flex justify-between shadow-lg">
            <div className="">
                <img className="w-60" src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 text-lg">
                    <li className="px-3">onlineStatus :{onlineStatus ? "🟢" : "🔴"} </li>
                    <li className="px-3 hover:shadow-lg">
                        <Link to ="/">
                            Home
                        </Link></li>
                    <li className="px-3  hover:shadow-lg">
                        <Link to = "/about">
                            About Us
                        </Link>
                    </li>
                    <li className="px-3 hover:shadow-lg">
                        <Link to = "/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li className="px-3 hover:shadow-lg font-bold">
                        <Link to ="/cart">
                            🛒Cart-({cartItems.length} items)
                        </Link>
                    </li>
                    <button className="px-3 hover:shadow-lg" onClick={()=>{
                        btnName==="Login" ? setbtnName("Logout"):setbtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;