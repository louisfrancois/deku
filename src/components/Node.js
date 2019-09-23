import React from 'react';
import './Node.css';

const Node = ({name, avatarUrl}) => {
    return (
        <div className="node">
            <div className="name">{name}</div>
            <img src={avatarUrl}></img>
        </div>
    )
}

export default Node;