import { useState } from "react";

const User = (props) => {
        const [count,setcount] = useState(0);

        return(
            <div className="user-card">
                <h1>Count : {count}</h1>
                <button onClick={()=>{
                    const num = count;
                    setcount(num+1)
                }}>Count increase</button>
                <h2>{props.name}</h2>
                <h3>Location :{props.location}</h3>
                <h4>Contact: @adityasharma32001</h4>
            </div>
        )
}

export default User;