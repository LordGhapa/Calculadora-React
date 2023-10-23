import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(to right, #222, #555);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
}
.ErrMaxNum{
  font-size:8px;
  line-height: 250%;
}

.cancelButton {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 0, 0, 1) 5%,
    rgba(0, 0, 0, 1) 10%,
    rgba(255, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 20%,
    rgba(255, 0, 0, 1) 25%,
    rgba(0, 0, 0, 1) 30%,
    rgba(255, 0, 0, 1) 35%,
    rgba(0, 0, 0, 1) 40%,
    rgba(255, 0, 0, 1) 45%,
    rgba(0, 0, 0, 1) 50%,
    rgba(255, 0, 0, 1) 55%,
    rgba(0, 0, 0, 1) 60%,
    rgba(255, 0, 0, 1) 65%,
    rgba(0, 0, 0, 1) 70%,
    rgba(255, 0, 0, 1) 75%,
    rgba(0, 0, 0, 1) 80%,
    rgba(255, 0, 0, 1) 85%,
    rgba(0, 0, 0, 1) 90%,
    rgba(255, 0, 0, 1) 90%,
    rgba(0, 0, 0, 1) 95%,
    rgba(255, 0, 0, 1) 100%
  ) !important;
  }
`
