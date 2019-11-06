import React from 'react';
import Footer from "./components/footer";
import Main from './components/Main';
//connect store / subscribe store to main app component
import {connect} from 'react-redux';
//import actions
import {anotherName, addItems} from './actions/action';

function App(props) {
  const myItems = props.myItems.map(item => {
    return (<h2 key={Math.random()}>{item}</h2>)
  })
console.log(props);
  return (
    <React.Fragment>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" crossOrigin="anonymous" />
      <div className="container" id="content">
      <h1>Name : {props.myName}</h1>
      {myItems}
      <button onClick={() => {props.changeName()}}>Change Name</button>
      <button onClick={() => {props.addItems()}}>Add items</button>

        <Main />
      </div>
      < footer >
        <Footer />
      </footer >
    </React.Fragment > 
  );
}

//Fetch data from store
const mapStateToProps = (state) => {
  return{
    myName : state.name,
    myItems: state.items
  }
}

//Change or update data. Dispatch an action from Component
const mapDispatchToProps = (dispatch) => {
  return{
    changeName: ()=>{ dispatch(anotherName()) },
    addItems: () => { dispatch(addItems()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
