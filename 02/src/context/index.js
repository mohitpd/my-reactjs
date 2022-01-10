import React, {Component} from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        users: [
            {id: 1, name: 'Mohit'},
            {id: 2, name: 'Rohit'},
            {id: 3, name: 'Lohit'},
        ],
        active: true,
    };
    render() {
        return <MyContext.Provider value={{users: this.state.users, active: this.state.active}}>{this.props.children}</MyContext.Provider>;
    }
}

export {MyContext, MyProvider};
