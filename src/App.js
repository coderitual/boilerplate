import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;

class App extends Component {
  state = {
    text: 'world',
    cls: 'main',
  };
  render() {
    return (
      <div className={`app ${this.state.cls}`} onClick={() => this.setState({ text: 'you' })}>
        Hello {this.state.text}
      </div>
    );
  }
}

export default App;
