import React, {Component} from 'react';
import {connect} from 'react-redux';
import {moviesList, getUser} from '../store/actions';

class Home extends Component {
    getMoviesHandler() {
        this.props.dispatch(moviesList());
    }

    getUsersHandler() {
        this.props.dispatch(getUser());
    }
    render() {
        console.log(this.props);
        const {movies} = this.props;
        return (
            <>
                {movies && movies.moviesList ? movies.moviesList.map((item) => <div key={item.id}>name: {item.name}</div>) : null}
                <button onClick={() => this.getMoviesHandler()}>Get Movies</button>
                {movies && movies.users ? movies.users.map((item) => <div key={item.id}>name: {item.name}</div>) : null}
                <button onClick={() => this.getUsersHandler()}>Get Users</button>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {movies: state.movies};
};

export default connect(mapStateToProps)(Home);
