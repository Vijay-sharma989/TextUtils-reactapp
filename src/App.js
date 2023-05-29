// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";



// let name = "vijay";
function App() {
  const [mode, setMode] = useState('light'); // whelter dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }


  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutils is Amazing'
      // },2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now!'
      // },1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" about="About Text" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    {/* <Navbar/> */}
    <div className="container my-3">
      {/* //use exact path for url */}
      {/* /users/ --> component1
      /users/home --> component2 */}
    <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
        </Routes>

    </div>
    </BrowserRouter>

    </>

  );
}

export default App;
