import React from "react";

export function UC() {
    var [count, setCount] = React.useState(0);
    function inc() {
        setCount(count + 1);
    }
    function dec() {
        setCount(count - 1);
    }
    return [count, inc, dec]
}

