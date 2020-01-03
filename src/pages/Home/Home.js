/* eslint-disable */
import React, { Component } from 'react'
import { Styles, Helpers } from 'utils'
import CustomStyle from './CustomStyle'
import { ApiPokemon } from 'api'
import { Loading, Container } from 'components'
import pokemonImage from 'images/pokeman-ball.svg'
import {Link} from 'react-router-dom'

class Home extends Component {
  componentDidMount(){
    ApiPokemon.index(0, 115).then(({ data }) => {
      const pokemons = data.results
      this.props.handleSetState('pokemons', data.results)()
    })
  }

  renderContent = (pokemons) => {
    let content

    if (pokemons.length === 0) {
      content = (
        <div className={Styles.marginTop4}>
          <Loading />
        </div>
      )
    } else {
      content = (
        <div className={Helpers.mergeCss(Styles.row, Styles.margin0, Styles.justifyContentCenter, Styles.marginTop4)}>
          <div className={Helpers.mergeCss(Styles.col, Styles.padding0, Styles.w11)}>
            <h4 className={Styles.marginBottom3}>Pokemon List</h4>
            {pokemons.map(data =>
              <Link to={`detail/${data.url.substr(data.url.length - 4).split('/').filter(item => (item && item !== 'n'))[0]}`} key={data.name} className={Helpers.mergeCss(Styles.card, CustomStyle.marginBottom)}>
                <div className={Helpers.mergeCss(Styles.cardBody, Styles.paddingTop2, Styles.paddingBottom2)}>
                  <div className={Helpers.mergeCss(Styles.row, Styles.alignItemsCenter)}>
                    <div className={Helpers.mergeCss(Styles.col, Styles.paddingLeft, Styles.paddingRight)}>
                      <img className={Styles.imgFluid} src={pokemonImage}/>
                    </div>
                    <div className={Helpers.mergeCss(Styles.col, Styles.w10)}>
                      <h4 className={Styles.marginBottom2}>
                        #{data.url.substr(data.url.length - 4).split('/').filter(item => (item && item !== 'n'))[0]}
                      </h4>
                      <h4 className={Styles.textCapitalize}>
                        {data.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      )
    }


    return content
  }

  render() {
    const {
      pokemons
    } = this.props.state

    return (
      <Container content={this.renderContent(pokemons)}/>     
    )
  }
}

export default Home
