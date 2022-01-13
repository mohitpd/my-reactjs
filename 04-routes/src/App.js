import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import Home from './components/home';
import Post from './components/posts';
import Profile from './components/profile';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <header>
                    <Link to={'/'}>Home</Link>-<Link to={'/posts'}>Post</Link>-<Link to={'/profile'}>Profile</Link>
                </header>
                <hr />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/posts' element={<Post />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
