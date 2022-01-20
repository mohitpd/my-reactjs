import React, {Component} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Header from './header';
import FormOne from './formOne';
import FormTwo from './formtwo';
import FormThree from './formThree';

class MyRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/formthree' element={<FormThree />} />
                    <Route path='/formtwo' element={<FormTwo />} />
                    <Route path='/' element={<FormOne />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default MyRoutes;
