import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Header from './components/heaader';
import Movie from './components/movies';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie' element={<Movie />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
