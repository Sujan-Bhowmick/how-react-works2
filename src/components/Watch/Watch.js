import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount)
        // console.log(steps);
    }
    useEffect( () => {
        console.log(steps)
    }, [steps])
    return (
        <div style={{border: '2px solid purple', margin: '10px'}}>
            <h1>I have Watch</h1>
            <h3>My current steps : {steps}</h3>
            <button onClick={increaseSteps}>De Dour</button>
            <Display name = 'gramin' steps = {steps}></Display>
        </div>
    );
};

export default Watch;