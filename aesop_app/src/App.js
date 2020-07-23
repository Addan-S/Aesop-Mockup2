import React from 'react';
import './App.css';
import SubFooter from './Components/SubFooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShippingModal from './Components/ShippingModal';
import TitleBanner from './Components/TitleBanner';
import AesopEssentials from './Components/AesopEssentials';
import GiftKits from './Components/GiftKits';
import Fragrance from './Components/Fragrance';
import AllGifts from './Components/AllGifts';
import HandsAndBody from './Components/HandsAndBody';
import ArchiAndDesign from './Components/ArchiAndDesign';
import NurturingFormulations from './Components/NuturingFormulations';
import Discover from './Components/Discover'; 
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      { ShippingModal }
      <TitleBanner />
      <AesopEssentials />
      { GiftKits }
      <Fragrance />
      <AllGifts />
      <HandsAndBody />
      { ArchiAndDesign }
      <NurturingFormulations />
      <Discover />
      <SubFooter />
      { Footer }
    </div>
  );
}

export default App;