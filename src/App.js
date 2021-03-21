import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DestinationDetails from './Components/Destination/DestinationDetails';
import Destination from './Components/Destination/Destination';


export const UserContext = createContext();

function App() {

const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/destination">
          <Destination />
        </PrivateRoute>
        <Route path="/destination/:id">
          <DestinationDetails />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
