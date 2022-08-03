import React from 'react';

const Card = ({name,email,id}) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
            <img alt = "Robots" src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2 className="b">{name}</h2>
                <h2>{email}</h2>
            </div>
        </div>
    );
}


export default Card