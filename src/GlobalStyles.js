import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  body {
    margin: 0;
    color: #333;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .container {
    width: 100%;
    max-width: 840px;
    padding: 0 1.25rem;
    margin: 0 auto;
  }

  .app-main {
    padding: 3.5rem 0;
  }

  .page-top {
    margin-bottom: 2rem;
  }
  .page-title {
    font-size: 2.7rem;
    font-weight: 700;
    text-align: center;
    margin: 0;
  }

  .page-title::after {
    content: '';
    display: block;
    width: 3rem;
    border-top: 4px solid #f05455;
    margin: 1rem auto 0;
  }

  .cart-item-count {
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }

  .cart-item-count-btn {
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    font-size: 1.1rem;
    border-radius: 100%;
    background: #d9d9d9;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: 0.3s;
  }

  .cart-item-count-btn:hover {
    color: #fff;
    background: #5476f0;
  }

  .cart-item-amount {
    flex: 0 0 max-content;
    font-size: 1.2rem;
  }

  @media (max-width: 575px) {
    .app-main {
      padding: 1.5rem 0;
    }
    .page-title {
      font-size: 2rem;
    }
  }
`
