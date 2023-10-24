import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`

@font-face {
       font-family: 'Pocket Calculator';
       src: url('/fonts/pocket_calcuatlor_tt.ttf') format('truetype');
       font-weight: normal;
       font-style: normal;
     }

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
