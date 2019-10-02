import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" crossOrigin="anonymous" />

      <header className="App-header">
        <Header />
      </header>
      < footer >
        <Footer />
      </footer >
    </React.Fragment >
  );
}

export default App;
