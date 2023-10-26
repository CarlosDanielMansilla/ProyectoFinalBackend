import React from 'react';
import './Body.css';
import { CardRow1, CardRow2 } from './CardRow';

function Body() {
    return (
        <div className="body">
            <div className="container">
                <CardRow1 />
                <CardRow2 />
            </div>
        </div>
    );
}

export default Body;