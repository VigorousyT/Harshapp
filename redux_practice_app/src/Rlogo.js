import React from "react";
import logo from './logo.svg';

function Rlogo() {
    return (
        <React.Fragment>
            <div>
                <h1>REACT LOGO</h1>
            </div>
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        </React.Fragment>
    )
}

export default Rlogo