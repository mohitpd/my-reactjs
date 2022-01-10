import React from 'react';
import {MyProvider} from './context';
import User from './components/users';

const App = () => {
    return (
        <>
            <MyProvider>
                <User />
            </MyProvider>
        </>
    );
};

export default App;
