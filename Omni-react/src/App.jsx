import React from 'react';
import SideBar from './components/SideBar'
import Main from './components/Main'
import Nav from './components/Nav'
import "./scss/app.scss"
function App() {
  return (
    <div id='app'>
      <SideBar />
      <div className='mainView'>
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default App;
