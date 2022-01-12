import React, {Component} from 'react';
import {MyContext} from './context';
import Stage1 from './components/stage_1';
import Stage2 from './components/stage_2';
import './style.css';

class App extends Component {
    static contextType = MyContext;
    render() {
        return (
            <div className='wrapper box-border flex items-center justify-center h-screen overflow-hidden m-0'>
                <div className='center-wrapper'>
                    <h1
                        className='
                    font-pacifico italic text-pink-600 underline decoration-blue-500'>
                        Who pays the bill ?
                    </h1>
                    {this.context.state.stage === 1 ? <Stage1 /> : <Stage2 />}
                </div>
            </div>
        );
    }
}

export default App;
