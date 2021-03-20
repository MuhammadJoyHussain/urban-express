import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Ticket from './Components/Home/Ticket';

export const UserContext = createContext();

function App() {

const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/destination/:ticketType">
            <Ticket />
          </PrivateRoute>
          <Route path="/destination">
            <Destination />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
