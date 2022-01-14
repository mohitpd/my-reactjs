import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Header from './components/heaader';
import PureComp from './components/pureComp';
import PureCompF from './components/pureCompF';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/purecomp' element={<PureComp />}></Route>
                <Route path='/purecompf' element={<PureCompF />}></Route>
                <Route path='/' element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
