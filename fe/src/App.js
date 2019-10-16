import React from 'react';
import styled from 'styled-components';

import NavMenu from './components/NavMenu';
import CardGallery from './components/CardGallery';

import './App.css';

function App() {
  return (
    <AppContainer>
      <NavMenu />
      <CardGallery />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
`;

export default App;
