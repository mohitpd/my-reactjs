import React, {Component} from 'react';

class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Mohit'};
        console.log('1-Constructor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('2-getDerivedStateFromProps');
        if (state.name === 'Ron') {
            return {
                name: 'Jack',
            };
        }
        return null;
    }

    componentDidMount() {
        console.log('4-componentDidMount');
    }
    componentWillUnmount() {
        console.log('5-componentWillUnmount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.name === 'Steve') {
            return false;
        }
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState);
        return null;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('x-componentDidUpdate');
        console.log(prevState);
        console.log(this.state);
    }
    render() {
        console.log('3-render');
        return (
            <div>
                <div>{this.state.name}</div>
                <div onClick={() => this.setState({name: 'Ron'})}>Change Name</div>
            </div>
        );
    }
}

export default Life;
