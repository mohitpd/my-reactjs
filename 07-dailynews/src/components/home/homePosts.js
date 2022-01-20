import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts} from '../../store/actions';

import Masonry from 'react-masonry-css';
import Moment from 'react-moment';

const HomePosts = () => {
    const homePost = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getPosts({}, 1, 'desc', 6));
    }, [dispatch]);
    const loadMorePost = () => {
        const page = homePost.page + 1;
        setLoading(true);
        dispatch(getPosts(homePost, page, 'desc', 6)).then(() => setLoading(false));
    };

    return (
        <>
            <Masonry breakpointCols={{default: 4, 1200: 3, 800: 2, 400: 1}} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
                {homePost.posts
                    ? homePost.posts.map((item) => (
                          <div key={item.id}>
                              <img className='w-full h-[200px]' src={item.image} alt='poster' />
                              <div className='author'>
                                  <span>{item.author} - </span>
                                  <Moment format='DD MMMM'>{item.createdAt}</Moment>
                              </div>
                              <div className='content'>
                                  <div className='title'>{item.title}</div>
                                  <div className='excerpt'>{item.excerpt}</div>
                                  <Link to={`/article/${item.id}`}>
                                      <button className='inline-block mt-2 px-2 py-1 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-300 focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 transition duration-150 ease-in-out'>Read more</button>
                                  </Link>
                              </div>
                          </div>
                      ))
                    : null}
            </Masonry>
            {loading ? (
                <div className='flex justify-center items-center'>
                    <div className='spinner-border animate-spin inline-block w-8 h-8 border-4 border-b-0 border-dashed rounded-full' role='status'>
                        <span className='visually-hidden'></span>
                    </div>
                </div>
            ) : null}
            {!homePost.end & !loading ? (
                <button className='inline-block px-6 py-2 border-2 bg-white border-blue-600 text-blue-600 shadow-md font-medium text-xs leading-tight uppercase rounded hover:bg-blue-600 hover:text-white focus:bg-blue-800 focus:outline-none focus:ring-0 transition duration-150 ease-in-out' onClick={() => loadMorePost()}>
                    Load more posts
                </button>
            ) : null}
        </>
    );
};

export default HomePosts;
