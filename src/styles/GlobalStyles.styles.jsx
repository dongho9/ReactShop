import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
${reset}

ul,li{
  list-style: none;
}
a{
  text-decoration: none;
  color: inherit;
}
:root{
  --light-color:#fff;
  --dark-color:#000;
  --accent-color: #dc143c;
  --border-color:#ccc;
}
html{
  font-size: 62.5%;
}
body{
  box-sizing: border-box;
  font-size: 1.6rem;
}
@media screen and (max-width: 600px){
  .menu{
    display: none !important;
  }
  
}
`;

export default GlobalStyles;
