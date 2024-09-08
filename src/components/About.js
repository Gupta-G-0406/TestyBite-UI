import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{

    constructor(props){
        super(props);

    }

    componentDidMount(){
    
    }

    render(){
        
        return(
        <div>
            <h1>About Us</h1>
            <h2>This page tell about us</h2>
            <UserClass/>
        </div>
    )
    }
}



// const About =() => {
//     return(
//         <div>
//             <h1>About Us</h1>
//             <h2>This page tell about us</h2>
//             <UserClass name = {"Aditya Sharma(Class)"} location ="Varansi(Class)"/>

//         </div>
//     )
// }

export default About;