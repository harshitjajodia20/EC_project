import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { PincodesList, PincodesInsert, PincodesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/pincodes/list" exact component={PincodesList} />
                <Route path="/pincodes/create" exact component={PincodesInsert} />
                <Route
                    path="/pincodes/update/:id"
                    exact
                    component={PincodesUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
