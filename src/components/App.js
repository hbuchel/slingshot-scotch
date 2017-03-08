import React from 'react';
import {Link} from 'react-router';

const App = (props) => {
    return (
        <div className="page">
            <header className="site-header">
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/books">Book</Link>
                    <Link to="/cart">Cart</Link>
                </nav>
            </header>
            { props.children }
        </div>
    );
};

export default App;