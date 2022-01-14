import React, {PureComponent} from 'react';

class PureComp extends PureComponent {
    state = {
        name: 'Mohit',
    };

    render() {
        console.log('render');
        return (
            <>
                <h3>{this.state.name}</h3>
                <button onClick={() => this.setState({name: 'Mohit'})}>CLick to change</button>
            </>
        );
    }
}

export default PureComp;
