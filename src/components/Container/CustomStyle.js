import {css} from 'emotion'

const linkLogo = css`
  color: #000 !important;
`

const fixed = css`
  position: fixed !important;
  max-width: 478px;
  z-index: 1111;
  top:0px;
`

const count = css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position:relative;
  background: black;
  color: white;
  font-size: 14px;
  display:inline-flex;
  justify-content: center;
  align-items:center;
  margin-left: 5px;
`

export default{
  linkLogo,
  fixed,
  count
}
