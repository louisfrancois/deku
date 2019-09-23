import React, { useEffect, useState } from 'react';
import Node from './Node'
import './Nodes.css';

function Nodes() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        getNodes();
    }, []);

    const getNodes = async () => {
        // const response = await fetch()
        // const data = await response.json();
        const nodes = [
        {
            id: 0,
            name: 'Mariah Carey',
            imageUrl: 'https://c-sf.smule.com/sf/s25/arr/86/ae/55306fa9-2b43-42aa-b0b0-aa9651f57181.jpg',
            influencedBy: ['Aretha Franklin', 'Minnie Riperton'],
            influenced: ['Beyonce', 'Rihanna']
        },
        {
            id: 1,
            name: 'Beyonce',
            imageUrl: 'https://www.stylist.co.uk/images/app/uploads/2019/05/15113206/beyonceuber-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress',
            influencedBy: ['Mariah Carey'],
            influenced: ['Normani']
        },
        {
            id: 2,
            name: 'Clarence LaVaughn "C. L." Franklin',
            imageUrl: 'http://www.malaco.com/wp-content/uploads/2015/12/rev-C-L-franklin-profile2.jpg',
            influencedBy: [],
            influenced: ['Aretha Franklin']
        },
        {
            id: 3,
            name: 'Aretha Franklin',
            imageUrl: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNTI2OTYzMjE0/aretha-franklin-9301157-1-402.jpg',
            influencedBy: ['Clara Ward', 'Clarence LaVaughn "C. L." Franklin', 'Sam Cooke'],
            influenced: ['Mariah Carey', 'Beyonce']
        },
        {
            id: 4,
            name: 'Normani',
            imageUrl: 'https://s2.r29static.com/bin/entry/abe/720x864,85/1969654/image.webp',
            influencedBy: ['Beyonce', 'Mariah Carey'],
            influenced: []
        },
        {
            id: 5,
            name: 'Minnie Riperton',
            imageUrl: 'http://static-cms.legacy.com/sites/default/files/styles/hero_detail/public/minnie-riperton-getty-1600x500.jpg?itok=Oyc3y-vl',
            influencedBy: ['Beyonce', 'Mariah Carey'],
            influenced: ['Marvin Gaye', 'Aretha Franklin']
        },
        ];
        console.log('nodes', nodes);
        setNodes(nodes)
    }

    return (
        <div classname="nodes">
            {nodes.map((node) => (
                <Node
                    name={node.name}
                    avatarUrl={node.imageUrl}
                />
            ))}
        </div>
    );
}

export default Nodes;
