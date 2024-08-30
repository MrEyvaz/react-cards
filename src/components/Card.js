import React from "react";

function Card({ data }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={data.image} className="card-img-top" alt="Monitor" style={{ height: '150px' }} />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.text}</p>
                <button className="btn btn-primary">Go somewhere</button>
            </div>
        </div>

    )
}

export default Card