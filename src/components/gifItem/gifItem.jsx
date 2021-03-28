import React from 'react';

import './gifItem.module.css';

const gifItem = ({ gif }) => {
    return (
        <li>
            <img src={gif} alt="Gif Description"/>
        </li>
    );
};

export default gifItem;
