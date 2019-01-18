import React from 'react';

const Repos = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.title}:</h3>
            <ul>
                {props.repos.map((item, index) => ( 
                    <li key={index}> <a href={item.link}> {item.name} </a></li>
                ))}
            </ul>
        </div>
    );
};

export default Repos;