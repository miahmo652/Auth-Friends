import React from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                console.log(res)
                window.localStorage.setItem("token", res.data.payload);
                this.props.history.push("/friends");
               
            })
            .catch(err => console.log({err}));
    };

    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <label htmlFor="username">Please enter your username</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                    <label htmlFor="password">Please enter your password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />

                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;