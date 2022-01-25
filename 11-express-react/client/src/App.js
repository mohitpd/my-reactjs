import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    componentDidMount() {
        axios.get('/api/getcars').then((response) => {
            console.log(response.data);
        });
    }

    onSubmitCar() {
        axios
            .post('/api/addcar', {
                brand: 'Ford',
                model: 'Focus',
                year: 2018,
                avail: true,
            })
            .then((response) => {
                console.log(response.data);
            });
    }

    render() {
        return (
            <>
                <button onClick={() => this.onSubmitCar()}>Add Car</button>
            </>
        );
    }
}

export default App;
