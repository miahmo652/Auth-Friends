import React from 'react';
import './App.css';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import FriendsList from './Components/FriendsList';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
<Router>
<div className="App">

  <Link to="/login">Login</Link>

  <Link to="/friends">Friends</Link>

      
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList}/>
          <Route path="/login" component={Login} />
          <Route component={Login} />
          
        </Switch>
      </div>
      <FriendsList />
</Router>
  );
}

export default App;
