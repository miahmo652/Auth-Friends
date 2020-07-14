import React from 'react';
import './App.css';
import Login from './Components/Login';
import  PrivateRoute  from './Components/PrivateRoute';
import FriendsList from './Components/FriendsList';
import AddFriends from './Components/AddFriend';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
<Router>
<div className="App">

  <Link to="/login">Login</Link>
<br/>
  <Link to="/"> Home</Link>
  <br/>
<Link to="/addfriend">Add Friend</Link>
      
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList}/>
          <Route path="/login" component={Login} />
          <Route path="/addfriend" component={AddFriends} />
          
        </Switch>
      </div>
      
</Router>
  );
}

export default App;
