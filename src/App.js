import React from 'react';
import './App.css';
import FormOne from './Components/FormOne';
import 'typeface-nunito';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import FormTwo from './Components/FormTwo';
import SubForm from './Components/SubForm';
import FormThree from './Components/FormThree';
import FormFour from './Components/FormFour';
import SuccessPage from './Components/SuccessPage';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <div className='app' >
      <Routes>
        <Route path='/' element={<FormOne />} />
        <Route path='/step-two' element={<FormTwo/>} />
        <Route path='/step-two/sub-form' element={<SubForm/>} />
        <Route path='/step-two/sub-form/step-three' element={<FormThree/>} />
        <Route path='/step-two/sub-form/step-three/step-four' element={<FormFour/>} />
        <Route path='/step-two/sub-form/step-three/step-four/step-success' element={<SuccessPage/>} />
        <Route path='/err' element={<ErrorPage/>} />
      </Routes>
      
    </div>
  );
}

export default App;