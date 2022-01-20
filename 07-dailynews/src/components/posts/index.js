import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Moment from 'react-moment';
import NewsLetter from '../utils/newsletter';
import {useNavigate, useParams} from 'react-router-dom';
import {getPostById, clearPostById} from '../../store/actions';
import {showToast} from '../utils/toasts';

const PostComponent = (props) => {
    const post = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getPostById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (post.post === '404') {
            showToast('ERROR', 'The page does not exist.');
            navigate('/');
        }
    }, [post, navigate]);

    useEffect(() => {
        return () => {
            dispatch(clearPostById());
        };
    }, [dispatch]);

    return (
        <>
            {post.post ? (
                <div>
                    <h1>{post.post.title}</h1>
                    <div
                        style={{
                            background: `url(${post.post.imagexl})`,
                        }}
                        className='bg-cover bg-no-repeat w-full h-[500px]'></div>
                    <div className='author mt-2.5 italic font-light'>
                        Created by: <span>{post.post.author} - </span>
                        <Moment format='DD MMMM'>{post.post.createdAt}</Moment>
                    </div>
                    <div className='mt-3'>
                        <div dangerouslySetInnerHTML={{__html: post.post.content}}></div>
                    </div>
                </div>
            ) : null}
            <NewsLetter />
        </>
    );
};

export default PostComponent;
