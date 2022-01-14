import React, {useState} from 'react';

const PureCompF = () => {
    const [name, setName] = useState('Mohit');
    console.log('render');
    return (
        <>
            PureCompF
            <h3>{name}</h3>
            <button onClick={() => setName('Mohit')}>CLick to change</button>
        </>
    );
};

export default PureCompF;
