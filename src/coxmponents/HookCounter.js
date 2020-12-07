import React, { useState } from 'react';

const HookCounter = () => {

    const [ count, setCount ] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Hook Count - <strong>{count}</strong>
            </button>
        </>
    );
};

export default HookCounter;
