import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'
import MoreInfo from '../SidebarContent/MoreInfo'

export default class AppRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path to="/" Component={MoreInfo}/>
            </Switch>
        )
    }
}
