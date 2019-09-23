import React, { useEffect, useState }from 'react';
import './Node.css';
import artistData from './../artistsData';

const Node = ({name, avatarUrl, influencedIds}) => {
    const [childNodes, setChildNodes] = useState([]);

    useEffect(() => {
        const nodes = []
        influencedIds.forEach((id) => {
            nodes.push(findArtistById(id))
        })
        setChildNodes(nodes)
    }, []);

    const findArtistById = (id) => {
        let artist = {};
        artistData.forEach((node) => {
            if (node.id === id) {
                artist = node;
            }  
        });
        console.log('artist', artist)
        return artist;
    }

    return (
        <div className="node">
            <div className="name">{name}</div>
            <img src={avatarUrl}></img>
            {childNodes.length && <div className="influenced-wrapper">
                Inspired:
                {/* <div className="node">
                    <div className="name">Name</div>
                    <img src=""></img>
                </div> */}
                {childNodes.map((node) => (
                    <Node
                        key={node.id}
                        name={node.name}
                        avatarUrl={node.imageUrl}
                        influencedIds={node.influencedIds} /> 
                    // <div className="node">
                    //     <div className="name">{node.name}</div>
                    //     <img src={node.imageUrl}></img>
                    // </div>
                ))}
            </div>}
        </div>
    )
}

export default Node;