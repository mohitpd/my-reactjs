import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from './hoc/mainLayout';

import PostComponent from './components/posts';
import Home from './components/home';
import Contact from './components/contact';
import Header from './components/header';

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <MainLayout>
                <Routes>
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/article/:id' element={<PostComponent />} />
                    <Route path='/' element={<Home />} />
                </Routes>
                <ToastContainer />
            </MainLayout>
        </BrowserRouter>
    );
};

export default MyRoutes;
