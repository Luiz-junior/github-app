import React from 'react';

const UserInfo = ({ userInfo }) => (
    <div className="row">
        <div className="col l3 m5 s5">
            <div className="user-info">
                <div className="card">
                    <div className="card-image">
                        <img src={userInfo.photo} />
                    </div>
                </div>
            </div>
        </div>
        <h4>
            <a href={`https://github.com/${userInfo.login}`}>{userInfo.username}</a>
        </h4>

        <ul className="repos-info">
            <li>Repositórios: {userInfo.repos}</li>
            <li>Seguidores: {userInfo.followers}</li>
            <li>Seguindo: {userInfo.following}</li>
        </ul>
    </div>
);

export default UserInfo;