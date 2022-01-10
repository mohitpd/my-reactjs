import React from 'react';

const Header = (props) => {
    return (
        <header style={{background: 'red'}}>
            <div>LOGO</div>
            <input onChange={props.keywords} />
        </header>
    );
};

export default Header;
