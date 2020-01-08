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
const ScrollView = css`
  flex-wrap: unset !important;
  width: 100% !important;
  overflow-x: auto !important;
  padding-right: 90px !important;
  margin-left: 0px !important;
  margin-right: -5px !important;
`

const paddingRight0 = css`
  padding-right: 5px !important;
  padding-left: 5px !important;
  &:first-of-type{
    padding-left: 0px !important;
  }
  &:last-of-type{
    padding-right: 0px !important;
  }
`

const contain = css`
  object-fit: contain !important;
`

const hidden = css`
  overflow: hidden !important;
`

const fixed = css`
  position: fixed !important;
  right: auto !important;
  bottom: 50% !important;
`

const overlay = css`
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: rgba(30,30,30, 0.9);
  width: 100% !important;
  margin: auto;
  z-index: 111111;
  @media (min-width: 576px){
    max-width: 480px;
  }

  @media (min-width: 768px){
    max-width: 480px;
  }

  @media (min-width: 992px){
    max-width: 480px;
  }

  @media (min-width: 1200px){
    max-width: 480px;
  }
`

const spin = css`
  animation: 0.5s spin infinite linear;
  width: 63px;
  height: 63px;
  object-fit: cover;
  object-fit: center;
  display: inline-block;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

const close = css`
  color: #fff;
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 30px;
  cursor: pointer;
`

const white = css`
  color: #fff;
`

const imgResult = css`
  width: 65%;
`

export default{
  marginBottom,
  ScrollView,
  paddingRight0,
  contain,
  hidden,
  fixed,
  overlay,
  spin,
  close,
  white,
  imgResult
}
