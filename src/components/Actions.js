import React from 'react';

const Actions = ({ getRepos, getStarred }) => {
    return (
        <div className="row">
            <button
                className="waves-effect grey darken-3 btn col s5 m3 l3"
                onClick={getRepos} > Repositórios
            </button>

            <div className="col s2 m6 l6" />

            <button
                className="waves-effect grey darken-3 btn col s5 m3 l3"
                onClick={getStarred} >Favoritos
            </button>
        </div>
    );
};

export default Actions;