/* eslint-disable */
import { css } from 'emotion'

const marginBottom = css`
  margin-bottom: 1rem!important;
  cursor: pointer;
  &:last-of-type{
    margin-bottom: 0px !important;
  }
  h4{
    color: #000;
  }
`
const ScrollView = css`
  flex-wrap: unset !important;
  width: 100% !important;
  overflow-x: auto !important;
  padding-right: 60px !important;
  margin-left: -5px !important;
  margin-right: -5px !important;
`

const paddingRight0 = css`
  padding-right: 5px !important;
  padding-left: 5px !important;
`

const contain = css`
  object-fit: contain !important;
`

const hidden = css`
  overflow: hidden !important;
`

export default{
  marginBottom,
  ScrollView,
  paddingRight0,
  contain,
  hidden
}