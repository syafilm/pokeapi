/* eslint-disable */
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Detail } from 'pages'
import { Routes } from 'utils'

class App extends Component {
  state = {
    pokemons: [],
    pokemon: {}
  }

  handleSetState = (type, value) => () => {
    this.setState({
      [type]: value
    })
  }
  
  render() {
    const {
      state,
      handleSetState,
    } = this

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={Routes.ROOT}
            render={(props) => (<Home {...props} state={state} handleSetState={handleSetState}/>)}
          />
          <Route
            exact
            path={Routes.DETAIL}
            render={(props) => (<Detail {...props} state={state} handleSetState={handleSetState}/>)}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App