/* eslint-disable */
import React, {Component} from 'react'
import {Styles, Helpers} from 'utils'
import {Container} from 'components'
import {Link} from 'react-router-dom'
import CustomStyle from './CustomStyle'

class MyPokemon extends Component {
  componentDidMount() {
    this.props.handleSetState('pokemon', {})()
  }

  handleReleasePokemon = id => () => {
    if (confirm('Are you sure, you want to release this pokemon?')) {
      const myPokemon = JSON.parse(localStorage.getItem('pokemonUserData'))
      const theData = myPokemon.filter(item => item.id !== id)
      localStorage.setItem('pokemonUserData', JSON.stringify(theData))
      this.props.handleSetState('myPokemon', theData)()
    }
  }

  renderContent = (myPokemon) => {
    const content = (
      <div className={Helpers.mergeCss(Styles.row, Styles.margin0,
        Styles.justifyContentCenter,
        Styles.marginTop4)}
      >
        <div className={Helpers.mergeCss(Styles.col, Styles.padding0, Styles.w11)}>
          {myPokemon.length > 0
            ? <h4 className={Styles.marginBottom3}>My Pokemon List</h4>
            : <h4 className={Styles.marginBottom3}>There is no pokemon yet</h4>
          }
          {myPokemon.map((data, key) => (
            <div
              key={data.id}
              className={Helpers.mergeCss(CustomStyle.positionRelative, CustomStyle.marginBottom)}
            >
              <Link to={`detail/${data.id}`} className={Helpers.mergeCss(Styles.card)}>
                <div className={Helpers.mergeCss(Styles.cardBody,
                  Styles.paddingTop2,
                  Styles.paddingBottom2)}
                >
                  <div className={Helpers.mergeCss(Styles.row, Styles.alignItemsCenter)}>
                    <div className={Helpers.mergeCss(Styles.col,
                      Styles.paddingLeft,
                      Styles.paddingRight)}
                    >
                      <img alt='' className={Styles.imgFluid} src={data.pokemon.sprites.front_shiny} />
                    </div>
                    <div className={Helpers.mergeCss(Styles.col, Styles.w10)}>
                      <h4 className={Styles.marginBottom2}>
                          #
                        {key + 1}
                      </h4>
                      <h4 className={Styles.textCapitalize}>
                        {data.nickName}
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
              <span role='presentation' onClick={this.handleReleasePokemon(data.id)} className={CustomStyle.release}>Release</span>
            </div>
          ))}
        </div>
      </div>
    )

    return content
  }

  render() {
    const {myPokemon} = this.props.state

    return (
      <Container state={this.props.state} content={this.renderContent(myPokemon)} />
    )
  }
}

export default MyPokemon
