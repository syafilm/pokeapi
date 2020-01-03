/* eslint-disable */
import React, { Fragment } from 'react'
import { Styles, Helpers, Routes } from 'utils'
import {Link} from 'react-router-dom'
import CustomStyle from './CustomStyle'

const Container = ({content, handleSetState}) => (
  <section className={Helpers.mergeCss(Styles.container, Styles.padding0)}>
    <div className={Helpers.mergeCss(Styles.row, Styles.margin0)}>
      <div className={Helpers.mergeCss(Styles.col, Styles.w12, Styles.padding0)}>
        <div className={Helpers.mergeCss(Styles.card,
          Styles.bgTransparent, 
          Styles.shadow0,
          Styles.paddingBottom3)}>
          <div className={Helpers.mergeCss(Styles.row, 
            Styles.w100,
            Styles.bgWhite, 
            Styles.paddingTop3, 
            Styles.paddingBottom3, 
            Styles.margin0,
            Styles.alignItemsCenter,
            Styles.shadow,
            CustomStyle.fixed)}>
            <div className={Styles.col}>
              <h5>Dark</h5>
            </div>
            <div className={Helpers.mergeCss(Styles.col, Styles.textCenter)}>
              <Link onClick={handleSetState} className={CustomStyle.linkLogo} to={Routes.ROOT}>Pokemon</Link>
            </div>
            <div className={Helpers.mergeCss(Styles.col, Styles.textRight)}>
              <h5>My Pokemon</h5>                
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