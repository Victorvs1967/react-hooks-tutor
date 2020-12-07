import React, { useState } from 'react';

const HookCounter3 = () => {
    const [ name, setName ] = useState({ firstName: '', lastName: '' });
    return (
        <form>
            <input  type="text" value={name.firstName} onChange={event => setName({ ...name, firstName: event.target.value})} />
            <input  type="text" value={name.lastName} onChange={event => setName({ ...name, lastName: event.target.value})} />
            <h4>Your First name - {name.firstName}</h4>
            <h4>Your Last name - {name.lastName}</h4>
            <p><code>{JSON.stringify(name)}</code></p>
    </form>
    );
};

export default HookCounter3;