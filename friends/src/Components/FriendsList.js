import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {

    state = {
        friends: []
    }
componentDidMount(){
    this.getData();
};

getData =()=>{
    axiosWithAuth()
    .get("/friends")
    .then(res =>{
        console.log(res);
        this.setState({
            friends: res.data
        })
    })
    .catch(err => console.log(err))
}


    render(){
        return(
        <div>

            {this.state.friends.map(friends =>{
                return (
                    <div key={friends.id}> 
                    <h3>Name: {friends.name}</h3>
                    <p>age: {friends.age}</p>
                    <p>email: {friends.email}</p>
                    
                    </div>
                )
            })}


        </div>


        )
    }
}

export default FriendsList;