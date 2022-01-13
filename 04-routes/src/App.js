import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './style.css';

import Header from './components/heaader';
import Home from './components/home';
import Post from './components/posts';
import Profile from './components/profile';
import PostItem from './components/postItem';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='posts' element={<Post />}>
                        <Route path=':id' element={<PostItem />} />
                    </Route>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<h3>OOPS Page Not Found</h3>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
