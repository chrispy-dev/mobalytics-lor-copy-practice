import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import NavMenu from './components/NavMenu';
import Landing from './components/Landing';
import DeckLibrary from './components/deck-library/DeckLibrary';
import CardGallery from './components/card-gallery/CardGallery';
import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <AppContainer>
      <NavBar />
      <MainContent>
        <NavMenu />

        <Route exact path="/" component={Landing} />
        <Route exact path="/card-gallery" component={CardGallery} />
        <Route exact path="/deck-library" component={DeckLibrary} />
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
