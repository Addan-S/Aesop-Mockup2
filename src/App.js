import React from 'react';
import './App.css';

import AesopEssentials from './components/AesopEssentials';
import NurturingFormulations from './components/NurturingFormulations';
import Footer from './Components/footer';


function App() {
  return (
    <div className="App">
      <AesopEssentials />
      <NurturingFormulations/>
      <Footer />
    </div>
  );
}

export default App;
