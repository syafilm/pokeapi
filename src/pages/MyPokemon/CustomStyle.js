import {css} from 'emotion'

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

const release = css`
  position:absolute;
  background: #000;
  top: 0px;
  right: 20px;
  color: #fff;
  padding: 10px 40px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 111;
`

const positionRelative = css`
  position: relative;
`

export default{
  marginBottom,
  release,
  positionRelative
}
