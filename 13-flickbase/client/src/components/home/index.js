import React from 'react';
import {Grid} from '@mui/material';
import ArticleCard from '../../utils/articleCard';

const Home = () => {
    return (
        <div>
            <div>CARROUSEL</div>
            <Grid container spacing={2} className='article_card'>
                <Grid key={1} item xs={12} sm={6} lg={3}>
                    <ArticleCard key={1} />
                </Grid>
                <Grid key={2} item xs={12} sm={6} lg={3}>
                    <ArticleCard key={1} />
                </Grid>
                <Grid key={3} item xs={12} sm={6} lg={3}>
                    <ArticleCard key={1} />
                </Grid>
                <Grid key={4} item xs={12} sm={6} lg={3}>
                    <ArticleCard key={1} />
                </Grid>
                <Grid key={5} item xs={12} sm={6} lg={3}>
                    <ArticleCard key={1} />
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
