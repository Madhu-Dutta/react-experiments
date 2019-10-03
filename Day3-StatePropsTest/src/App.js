import React from 'react';
import Footer from "./components/footer";
import Main from './components/main';
import Counter from './components/counter';

function App() {

  return (
    <React.Fragment>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" crossOrigin="anonymous" />
        <div className="container" id="content">
          <Main />
          <Counter />
        </div>
        < footer >
          <Footer />
        </footer >
    </React.Fragment >
      );
    }
    
    export default App;
