import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';
import Life from './components/lifecycle';

class App extends Component {
    state = {
        news: JSON,
        filtered: [],
        footerText: 'This is the Happy Footer',
    };

    getKeywords = (event) => {
        console.log(event.target.value);
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        });
        this.setState({
            filtered,
        });
    };

    render() {
        return (
            <>
                <Header keywords={this.getKeywords} />
                <NewsList news={this.state.filtered} />
                <Life />
                <Footer footerText={this.state.footerText} />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
