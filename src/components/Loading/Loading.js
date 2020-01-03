/* eslint-disable */
import React, { Fragment } from 'react'
import { Styles, Helpers } from 'utils'
import CustomStyle from './CustomStyle'

const Loading = () => (
  <Fragment>
    <div className={Helpers.mergeCss(Styles.dFlex, Styles.w100, Styles.justifyContentCenter)}>
      <div className={CustomStyle.donut}></div>
    </div>
  </Fragment>
)

export default Loading