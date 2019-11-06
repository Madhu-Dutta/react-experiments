import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './style/index.css';
import App from './App';
//Import redux createstore 
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
//Import middlewr redux-thunk for performing asynchronus functions
import thunk from 'redux-thunk';
//Import provider to communicate redux with react app
import {Provider} from 'react-redux';
//Import reducer 
import nameReducer from './reducer/nameReducer';
import itemReducer from './reducer/itemReducer';

//For browser redux_tool support
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//Root/Combine Reducer
const rootReducer = combineReducers({
    name: nameReducer,
    items: itemReducer
})

//Create an empty store
//Pass data from reducer to store
const store = createStore(rootReducer,{name: 'Default Name', items: ['timesheets', 'project work']},composeEnhancers(applyMiddleware(thunk)));


//Provide react app with store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


