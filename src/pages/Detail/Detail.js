/* eslint-disable */
import React, { Component } from 'react'
import { Styles, Helpers } from 'utils'
import CustomStyle from './CustomStyle'
import { ApiPokemon } from 'api'
import { Loading, Container } from 'components'
import pokemonImage from 'images/pokeman-ball.svg'
import {Link} from 'react-router-dom'

class Detail extends Component {
  componentDidMount(){
    ApiPokemon.show(this.props.match.params.id).then(({ data }) => {
      this.props.handleSetState('pokemon', data)()
    })
  }

  renderContent = (pokemon) => {
    let content
    const isPokemonEmpty = (Object.keys(pokemon).length === 0 && pokemon.constructor === Object)
    if(isPokemonEmpty){
      content = (
        <div className={Styles.marginTop4}>
          <Loading />
        </div>
      )
    } else {
      content = 
      <div className={Helpers.mergeCss(Styles.row, Styles.margin0, Styles.justifyContentCenter, Styles.marginTop4)}>
        <div className={Helpers.mergeCss(Styles.col, CustomStyle.hidden, Styles.padding0, Styles.w11)}>
          <h4 className={Helpers.mergeCss(Styles.marginBottom3, Styles.textCapitalize)}>{pokemon.name}</h4>
          <div className={Helpers.mergeCss(Styles.row, CustomStyle.ScrollView)}>          
            {Object.keys(pokemon.sprites).map(key => pokemon.sprites[key]).filter(item => item).reverse().map(item => 
              <div key={item} className={Helpers.mergeCss(Styles.col, CustomStyle.paddingRight0, Styles.w6)}>
                <div className={Styles.card}>
                  <img className={Helpers.mergeCss(Styles.imgFluid, CustomStyle.contain)} src={item}/>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    }

    return content
  }

  render() {
    const {
      pokemon
    } = this.props.state

    console.log(pokemon)
    
    return (
      <Container handleSetState={this.props.handleSetState('pokemon', {})} content={this.renderContent(pokemon)}/>     
    )
  }
}

export default Detail
