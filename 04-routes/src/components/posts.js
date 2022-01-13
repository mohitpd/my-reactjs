import React from 'react';
import {Outlet} from 'react-router-dom';

const Posts = () => {
    return (
        <>
            Posts
            <Outlet />
        </>
    );
};

export default Posts;
