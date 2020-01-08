import React, {Component, Fragment} from 'react'
import {Styles, Helpers} from 'utils'
import {ApiPokemon} from 'api'
import {Loading, Container} from 'components'
import pokemonImage from 'images/pokeman-ball.svg'
import CustomStyle from './CustomStyle'

class Detail extends Component {
  componentDidMount() {
    ApiPokemon.show(this.props.match.params.id).then(({data}) => {
      this.props.handleSetState('pokemon', data)()
    })
  }

  handleCatch = () => {
    this.props.handleSetState('result', [0])()
    setTimeout(() => {
      const result = Math.round(Math.random()) + 1
      switch (result) {
      case 2:
        this.props.handleSetState('result', [2])()
        break
      default:
        this.props.handleSetState('result', [1])()
      }
    }, 4000)
  }

  submitPokemon = pokemon => () => {
    const {nickName} = this.props.state
    const objecToSend = {
      nickName,
      pokemon,
      name: pokemon.name,
      id: this.props.match.params.id
    }
    let theData
    if (localStorage.getItem('pokemonUserData') === null) {
      theData = [objecToSend]
    } else if (JSON.parse(localStorage.getItem('pokemonUserData')).filter(item => item.name === pokemon.name).length > 0) {
      theData = JSON.parse(localStorage.getItem('pokemonUserData'))
    } else {
      theData = JSON.parse(localStorage.getItem('pokemonUserData')).concat(objecToSend)
    }

    localStorage.setItem('pokemonUserData', JSON.stringify(theData))

    this.props.handleSetState('myPokemon', theData)()
    this.props.handleSetState('result', [])()
    this.props.handleSetState('nickName', '')()
  }

  renderContent = (state) => {
    const {handleCatch} = this
    const {pokemon, result} = state
    let content
    const isPokemonEmpty = (Object.keys(pokemon).length === 0 && pokemon.constructor === Object)
    if (isPokemonEmpty) {
      content = (
        <div className={Styles.marginTop4}>
          <Loading />
        </div>
      )
    } else {
      content = (
        <div className={Helpers.mergeCss(Styles.row,
          Styles.margin0,
          Styles.justifyContentCenter,
          Styles.marginTop4)}
        >
          <div className={Helpers.mergeCss(Styles.col,
            CustomStyle.hidden,
            Styles.padding0,
            Styles.w11)}
          >
            <div className={Helpers.mergeCss(Styles.marginBottom3,
              Styles.row,
              Styles.alignItemsCenter)}
            >
              <div className={Helpers.mergeCss(Styles.col, Styles.w4)}>
                <h3 className={Helpers.mergeCss(Styles.textCapitalize)}>{pokemon.name}</h3>
              </div>
              <div className={Helpers.mergeCss(Styles.col, Styles.w8, Styles.textRight)}>
                {/* eslint-disable */}
                {(result.length === 0 && 
                  state.myPokemon.filter(item => item.name === pokemon.name).length === 0)
                  ? (
                    <span onClick={handleCatch} className={Helpers.mergeCss(Styles.btnDark, Styles.paddingLeft4, Styles.paddingRight4)}>
                  Catch
                    </span>
                  ) : result.includes(0) ? null : result.includes(1) || state.myPokemon.filter(item => item.name === pokemon.name).length === 0 && null}
                {/* eslint-enable */}
              </div>
            </div>
            <div className={Helpers.mergeCss(Styles.row, CustomStyle.ScrollView)}>
              {Object.keys(pokemon.sprites)
                .map(key => pokemon.sprites[key])
                .filter(item => item).reverse()
                .map(item => (
                  <div
                    key={item}
                    className={Helpers.mergeCss(Styles.col, CustomStyle.paddingRight0, Styles.w6)}
                  >
                    <div className={Styles.card}>
                      <img alt='' className={Helpers.mergeCss(Styles.imgFluid, CustomStyle.contain)} src={item} />
                    </div>
                  </div>
                ))}
            </div>
            <div className={Helpers.mergeCss(Styles.row, Styles.marginTop3)}>
              <div className={Helpers.mergeCss(Styles.col, Styles.w12)}>
                <div className={Styles.card}>
                  <div className={Styles.cardBody}>
                    <h4 className={Helpers.mergeCss(Styles.marginBottom2, Styles.textCapitalize)}>
                      Description
                    </h4>
                    <span className={Helpers.mergeCss(Styles.marginBottom4, Styles.dBlock)}>
                      <p className={Helpers.mergeCss(Styles.textCapitalize,
                        Styles.margin0,
                        Styles.dInlineBlock)}
                      >
                        {pokemon.name}
                      </p>
                      {' '}
Pokemon has
                      {' '}
                      {pokemon.moves.length}
                      {' '}
move and It&#39;s type of
                      {' '}
                      {pokemon.types.map(item => item.type.name).join(', ')}
                      {' '}
pokemon
                    </span>
                    <h4 className={Helpers.mergeCss(Styles.marginBottom2, Styles.textCapitalize)}>
                      Detail Move
                    </h4>
                    <span className={Styles.textMuted}>{pokemon.moves.map(item => item.move.name).join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return content
  }

  renderOverlay = (content) => {
    const {handleSetState} = this.props
    return (
      <div className={CustomStyle.overlay}>
        <span role='presentation' onClick={handleSetState('result', [])} className={CustomStyle.close}>x</span>
        {content}
      </div>
    )
  }

  render() {
    const {result, pokemon, nickName} = this.props.state
    const {handleSetStateInput} = this.props
    const {handleCatch} = this

    return (
      <Fragment>
        <Container state={this.props.state} handleSetState={this.props.handleSetState('pokemon', {})} content={this.renderContent(this.props.state)} />
        {/* eslint-disable */}
        {result.length === 0 ? null
          : result.includes(0) ? this.renderOverlay(
            <div className={Styles.textCenter}>
              <img alt='' className={CustomStyle.spin} src={pokemonImage} />
              <span className={Helpers.mergeCss(CustomStyle.white, Styles.marginTop3, Styles.dBlock, Styles.textCenter)}>Still catching...</span>
            </div>
          )
            : (result.includes(2) ? this.renderOverlay(
              <div className={Styles.textCenter}>
                <img alt='' className={Helpers.mergeCss(CustomStyle.imgFluid, CustomStyle.imgResult, CustomStyle.contain)} src={pokemon.sprites.front_shiny} />
                <span className={Helpers.mergeCss(CustomStyle.white, Styles.marginBottom3, Styles.dBlock, Styles.textCenter)}>Yeay!!!</span>
                <input value={nickName} placeholder='Give this pokemon nickname' onChange={handleSetStateInput('nickName')} className={Styles.formControl} />
                <span onClick={this.submitPokemon(pokemon)} className={Helpers.mergeCss(Styles.btnLight, Styles.marginTop3, Styles.paddingLeft4, Styles.paddingRight4)}>Save to my pokemon list</span>
              </div>
            ) : this.renderOverlay(
              <div className={Styles.textCenter}>
                <span className={Helpers.mergeCss(CustomStyle.white, Styles.marginBottom3, Styles.dBlock, Styles.textCenter)}>Failed :( please try again</span>
                <span onClick={handleCatch} className={Helpers.mergeCss(Styles.btnLight, Styles.paddingLeft4, Styles.paddingRight4)}>Catch again</span>
              </div>
            )
            )}
        {/* eslint-enable */}
      </Fragment>
    )
  }
}

export default Detail
