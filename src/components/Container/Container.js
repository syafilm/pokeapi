import React from 'react'
import {Styles, Helpers, Routes} from 'utils'
import {Link} from 'react-router-dom'
import CustomStyle from './CustomStyle'

const Container = ({content, handleSetState, state}) => (
  <section className={Helpers.mergeCss(Styles.container, Styles.padding0)}>
    <div className={Helpers.mergeCss(Styles.row, Styles.margin0)}>
      <div className={Helpers.mergeCss(Styles.col, Styles.w12, Styles.padding0)}>
        <div className={Helpers.mergeCss(Styles.card,
          Styles.bgTransparent,
          Styles.shadow0,
          Styles.paddingBottom3)}
        >
          <div className={Helpers.mergeCss(Styles.row,
            Styles.w100,
            Styles.bgWhite,
            Styles.paddingTop3,
            Styles.paddingBottom3,
            Styles.margin0,
            Styles.alignItemsCenter,
            Styles.shadow,
            CustomStyle.fixed)}
          >
            <div className={Helpers.mergeCss(Styles.col, Styles.textLeft)}>
              <Link onClick={handleSetState} className={CustomStyle.linkLogo} to={Routes.ROOT}>
                Pokemon
              </Link>
            </div>
            <div className={Helpers.mergeCss(Styles.col, Styles.textRight)}>
              <Link to={Routes.MYPOKEMON} className={CustomStyle.linkLogo}>
                My Pokemon
                {state.myPokemon.length > 0
                  ? <span className={CustomStyle.count}>{state.myPokemon.length}</span> : null
                }
              </Link>
            </div>
          </div>
          <div className={Styles.marginTop5}>
            {content}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Container
