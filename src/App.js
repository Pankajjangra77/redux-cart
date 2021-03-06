import React from 'react';
import HomeContainer from "./containers/homeContainer";
import './App.css';
import  HeaderContainer from "./containers/HeaderContainer";
function App() {
  return   <div className= "App">
  <HeaderContainer />
  <HomeContainer />
  </div>
}

export default App;
