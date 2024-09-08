import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo:{

            }
        };
       
    }

    async componentDidMount(){
        
        const data = await fetch("https://api.github.com/users/aditya32001")

        const json = await data.json();

        console.log(json);
        
        this.setState({
            userInfo:json,
        })
  
    }

    render(){
            const{name,avatar_url,login} = this.state.userInfo;

        return(
            <div className="user-card">
                <img className="logo" src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h3>ID name : {login}</h3>
                <h4>Contact: @adityasharma32001</h4>
            </div>
        )
    }
}

export default UserClass;