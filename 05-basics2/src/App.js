import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Header from './components/heaader';
import PureComp from './components/pureComp';
import PureCompF from './components/pureCompF';
import Adjel from './components/adjel';
import Profile from './components/profile';
import User from './components/user';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/user' element={<User />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/purecomp' element={<PureComp />}></Route>
                <Route path='/purecompf' element={<PureCompF />}></Route>
                <Route path='/adjel' element={<Adjel />}></Route>
                <Route path='/' element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
