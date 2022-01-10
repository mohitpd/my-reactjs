import React from 'react';
import NewsListItem from './news_list_item';

const newsList = (props) => {
    const news = props.news.map((item) => <NewsListItem item={item} key={item.id} />);
    return <>{news}</>;
};

export default newsList;
