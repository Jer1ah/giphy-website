import React from 'react';

import './gifItem.module.css';

const gifItem = ({ gif }) => {
    return (
        <img src={gif} alt="Gif Description"/>
    );
};

export default gifItem;

