import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogPost from "./container/BlogPost/BlogPost";
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPostMahasiswa from './container/BlogPost/BlogPostMahasiswa';

//ReactDOM.render(<BlogPost />, document.getElementById('content'));
ReactDOM.render(<BlogPostMahasiswa />, document.getElementById('content'));

/*const Hello = () =>{
return <p>hello</p>
}*/

/*function HelloComponent(){
  return HelloComponent
ReactDOM.render(<HelloComponent/>, document.getElementById('root'));
}*/

/*class StateFullComponent  extends React.Component{
   render(){
     return<p>StateFullComponent</p>
   }
 }
 ReactDOM.render(<StateFullComponent />, document.getElementById('root'));*/

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

