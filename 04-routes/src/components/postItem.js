import React from 'react';
import {useParams} from 'react-router-dom';

const PostItem = (props) => {
    let params = useParams();
    console.log(params.id);
    return (
        <>
            <div>{params.id}</div>
            <div>PostItem</div>
        </>
    );
};

export default PostItem;
