import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'


class AddFriends extends React.Component {
    state = {
        addFriend: {
            name: "",
            age: "",
            email: ""
        }
    }

    handleChange = e => {
        this.setState({
            addFriend: {
                ...this.state.addFriend,
                [e.target.name]: e.target.value
            }
        })
    }
    newFriend = ()=>{
        axiosWithAuth()
        .post("/friends", this.state.addFriend)
        .then(res => console.log(res))
        .catch(err=> console.log(err))
    }

    render() {
        return(
        <form onSubmit={this.newFriend}>
            <label>
                Name:
                <input
                name="name"
                value={this.state.addFriend.name}
                onChange={this.handleChange}
                />
            </label>

            <label>
                Age:
                <input
                name="age"
                value={this.state.addFriend.age}
                onChange={this.handleChange}
                />
            </label>
            <label>
                email:
                <input
                name="email"
                value={this.state.addFriend.email}
                onChange={this.handleChange}
                />
            </label>
            <button> Add Friend</button>

        </form>
        )}
        
}

export default AddFriends;