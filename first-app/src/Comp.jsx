import React from "react";

function COMP(props) {
    return (
        <div className="tod">
            <h2>Component</h2>
            <h1>{props.fn}</h1>
        </div>
    )
}

export default COMP