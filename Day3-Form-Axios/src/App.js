import React from 'react';
import Footer from "./components/footer";
import Postform from './components/postform';

function App() {

  return (
    <React.Fragment>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" crossOrigin="anonymous" />
      <div className="container" id="content">
        <Postform />
      </div>
      < footer >
        <Footer />
      </footer >
    </React.Fragment >
  );
}

export default App;
