import React from 'react';

export const Home = (props) => (
    <div>
        <div>{props.resipe.name}</div>
        <div>{props.resipe.recipe}</div>
    </div>

);