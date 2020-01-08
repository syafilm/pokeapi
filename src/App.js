/* eslint-disable */
import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home, Detail, MyPokemon} from 'pages'
import {Routes} from 'utils'

class App extends Component {
  state = {
    pokemons: [],
    pokemon: {},
    myPokemon: [],
    result: [],
    nickName: ''
  }

  componentDidMount() {
    const myPokemon = localStorage.getItem('pokemonUserData') === null ? [] : JSON.parse(localStorage.getItem('pokemonUserData'))
    this.setState({myPokemon})
  }

  handleSetState = (type, value) => () => {
    this.setState({
      [type]: value
    })
  }

  handleSetStateInput = type => (e) => {
    const {value} = e.target
    this.setState({
      [type]: value
    })
  }

  render() {
    const {
      state,
      handleSetState,
      handleSetStateInput
    } = this

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={Routes.ROOT}
            render={props => (
              <Home
                {...props}
                state={state}
                handleSetStateInput={handleSetStateInput}
                handleSetState={handleSetState}
              />
            )}
          />
          <Route
            exact
            path={Routes.DETAIL}
            render={props => (
              <Detail
                {...props}
                state={state}
                handleSetStateInput={handleSetStateInput}
                handleSetState={handleSetState}
              />
            )}
          />
          <Route
            exact
            path={Routes.MYPOKEMON}
            render={props => (
              <MyPokemon
                {...props}
                state={state}
                handleSetStateInput={handleSetStateInput}
                handleSetState={handleSetState}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
