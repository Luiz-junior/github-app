import React from 'react';

const Repos = ({ className, title, repos }) => (
        <div className={className}>
            <h3>{title}:</h3>
            <ul>
                {repos.map((repo, index) => ( 
                    <li key={index}> <a href={repo.link}> {repo.name} </a></li>
                ))}
            </ul>
        </div>
    );

export default Repos;