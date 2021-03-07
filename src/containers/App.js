import React, { Component } from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import Header from '../components/Header/Header';
import logo from '../logo.svg';

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header logo={logo} />
        <Profile />
      </AppWrapper>
    );
  }
}

export default App;
