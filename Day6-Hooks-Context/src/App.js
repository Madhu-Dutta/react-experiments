import React from 'react';
import Footer from "./components/footer";
// import Main from './components/main';
import BasicHooks from './components/basicHooks';
import Map from './components/map';


function App() {

  return (
    <React.Fragment>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" crossOrigin="anonymous" />
      <div className="container" id="content">
        {/* <Main /> */}
        <Map />
        <BasicHooks />
      </div>
      < footer >
        <Footer />
      </footer >
    </React.Fragment >
  );
}

export default App;
