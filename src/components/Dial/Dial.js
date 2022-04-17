import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '3px solid blue', margin: '10px'}}>
            <h3>This is dial  </h3>
            <p>Steps so far:{props.steps} </p>
        </div>
    );
};

export default Dial;