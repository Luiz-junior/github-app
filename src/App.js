import React, { Component } from 'react';
import AppContent from './components/AppContent';
import api from './services/api';

class App extends Component {

  state = {
    userInfo: null,
    repos: [],
    starred: [],
  };

  handleSearch = (e) => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
    
      api.get(`users/${value}`)
        .then((result) => {
          this.setState({
            userInfo: {
              username: result.data.name,
              photo: result.data.avatar_url,
              login: result.data.login,
              repos: result.data.public_repos,
              followers: result.data.followers,
              following: result.data.following,
            },
            repos: [],
            starred: []
          });
        })
        .catch((err) => err);
    }
  };

  getRepos = (type) => {
    const user = this.state.userInfo.login;
    api.get(`users/${user}/${type}`)
      .then((result) => {
        this.setState({
          [type]: result.data.map((repo) => ({
              name: repo.name,
              linl: repo.html_url
          }))
        });
      })
      .catch((err) => err );
  };

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={() => this.getRepos('repos')}
        getStarred={() => this.getRepos('starred')}
      />
    );
  }
}

export default App;
