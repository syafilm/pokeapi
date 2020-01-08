import {css} from 'emotion'

const donut = css`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.25rem solid rgba(33, 37, 41, 0.25);
  border-top-color: #212529;
  animation: 1s spin infinite linear;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

export default{
  donut
}
