import React from 'react';
import house from '../img/property.jpg';

export default function Tiles(props) {
    var { address, propertyImg, airFilter, id } = props.property
    return (
        <div className="tile">
            <div>
                <img src={house} alt='property' width="210" />
            </div>
            <p style={{ fontWeight: "bold", margin: "0px" }}>Property Address:</p>
            <p style={{margin: "0px"}}>{address}</p>
            <p style={{ fontWeight: "bold", margin: "8px 0px 0px" }}>Last Air Filter Change:</p>
            <p style={{margin: "0px"}}>{airFilter}</p>
            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "8px"
                }}>
                <button
                    className="buttons"
                    onClick={() => props.filterChangeClick(id)}
                >Filter Change</button>
                <button
                    className="buttons"
                    onClick={() => props.deleteClick(id)}
                >Remove Property</button>
            </div>
        </div>
    )
}
