import React from 'react';
import styled from 'styled-components';

import NavMenu from './components/NavMenu';
import CardGallery from './components/card-gallery/CardGallery';
import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <AppContainer>
      <NavBar />
      <MainContent>
        <NavMenu />
        <CardGallery />
      </MainContent>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://image.redbull.com/rbcom/010/2017-01-03/1331837749223_2/0001/0/1500/1000/1/the-fields-of-justice-have-a-complicated-history.JPG");
`;

const MainContent = styled.div`
  display: flex;
`;

export default App;
