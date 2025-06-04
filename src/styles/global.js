import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    line-height: 1.6;
  }
  
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .main-content {
    flex: 1;
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    margin-bottom: 1rem;
    color: ${props => props.theme.primary};
  }
  
  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
