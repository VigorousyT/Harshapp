import React from 'react';

function EventHandling() {
    function eh(z) {
        console.log(z)
    }
    return (
        <div className='tod'>
            <h2>Event Handler Harsh</h2>
            <button onClick={eh}>Call Handler</button>
            <button onClick={(ev) => { eh(100) }}>Just another Handler</button>
        </div>
    )
}

export default EventHandling