import React from 'react'
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar, StickyFooter } from '../components'
import { PincodesList, PincodesInsert, PincodesUpdate, Home } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import fire from "./fire";
import "./styles.css";
import Login from "./Login";

function App() {
    const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [passerr, setPasserr] = useState("");
  const [hasaccount, setHasaccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailerr("");
    setPasserr("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailerr(err.message);
            break;
          case "auth/wrong-password":
            setPasserr(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailerr(err.message);
            break;
          case "auth/weak-password":
            setPasserr(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
    return (
        <div>
        {user? (
            <Router>
            <NavBar handleLogout={handleLogout}/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pincodes/list" exact component={PincodesList} />
                <Route path="/pincodes/create" exact component={PincodesInsert} />
                <Route
                    path="/pincodes/update/:id"
                    exact
                    component={PincodesUpdate}
                />
            </Switch>
            <StickyFooter/>
        </Router>
        ) : (
            <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasaccount={hasaccount}
            setHasaccount={setHasaccount}
            emailerr={emailerr}
            passerr={passerr}
          />
        )}
       </div>
    )
}

export default App
