import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =((message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);

    },1500)

  })

   const toogleMode=()=>{
     if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ="#042743";
      showAlert('Dark mode has been enabled','success');
      // document.title ='TextApp -Dark Mode';

     }else{
       setMode('light');
       document.body.style.backgroundColor ="white";
       showAlert('Light mode has been enabled','success');
      //  document.title ='TextApp -Light Mode';
     }
    

  } 

  return (
     <>
     <Router>
     <Navbar title="TextApp" aboutText="About " mode={mode} toogleMode={toogleMode}/>
     <Alert alert={alert}/>
       <div className="container my-3">
       <Routes>
          <Route exact path="/about" element={ <About mode={mode}/>}/>      
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextApp -Word Counter,Character Counter, Remove extra spaces" mode={mode}/>}/>
        </Routes>
        {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
       </div>
       </Router>
       

     
     
     </>


    
  );
}

export default App;
