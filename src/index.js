import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//TechW/Tim didnt include this. //Replit auto created
import * as serviceWorker from './serviceWorker';


//Defualt Renderer
ReactDOM.render(<App />, document.getElementById('root'));

//Tim's Renderer has strict mode// giving error
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
