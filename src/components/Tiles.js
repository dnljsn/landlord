import React from 'react';

export default function Tiles(props) {
    var {address, airFilter, id} = props.property
    return (
        <div className="tile">
                <p>Property Address:</p>
                <p>{address}</p>
                <br></br>
                <p>Last Air Filter Change:</p>
                <p>{airFilter}</p>
                <button
                    className="buttons"
                    onClick={() => props.filterChangeClick(id)}
                >Filter Change</button>
                <button
                    className="buttons"
                    onClick={() => props.deleteClick(id)}
                >Remove Property</button>  
        </div>
    )
}
