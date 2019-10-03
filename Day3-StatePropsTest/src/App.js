import React from 'react';
import Footer from "./components/footer";
import Main from './components/main';
import Counter from './components/counter';
import CarouselExample from './components/carousel';

function App() {

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" crossOrigin="anonymous" />
      <div className="container" id="content">
        <CarouselExample />
        <Main />
        <Counter />
      </div>
      < footer >
        <Footer />
      </footer >
    </div>
  );
}

export default App;
