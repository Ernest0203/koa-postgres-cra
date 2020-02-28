import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import styled, { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <AppWrapper>
          <header className="appHeader">
            <h2>Koa-postgres-cra</h2>
          </header>
          <main className="appMain"></main>
        </AppWrapper>
      </Provider>
    </Fragment>
  );
}

const AppWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  box-shadow: 0 3px 10px rgba(0,0,0, .2);
  background-color: #fff;
  .appHeader {
    padding: 20px 0;
    h2 {
      text-align: center;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eee;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default App;