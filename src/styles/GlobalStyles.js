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


`
