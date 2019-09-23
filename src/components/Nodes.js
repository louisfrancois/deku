import React, { useEffect, useState } from 'react';
import Node from './Node'
import './Nodes.css';
import artistData from './../artistsData';

const Nodes = ({query}) => {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        getNodes();
        console.log('rerender')
        console.log('query', query)
    }, [query]);

    const getNodes = async () => {
        let finalNodes = artistData.filter((node) => {
            return node.name.toLowerCase() === query.toLowerCase();
        });
        setNodes(finalNodes)
    }

    return (
        <div className="nodes">
            {nodes.map((node) => (
                <Node
                    key={node.id}
                    name={node.name}
                    avatarUrl={node.imageUrl}
                    influencedIds={node.influencedIds}
                />
            ))}
        </div>
    );
}

export default Nodes;
