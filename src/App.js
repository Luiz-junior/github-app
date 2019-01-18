import React, { Component } from 'react';
import AppContent from './components/AppContent';
import axios from "axios";

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
      axios.get(`https://api.github.com/users/${value}`)
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

          });
        })
        .catch((err) => err);
    }
  };

  getRepos = (user, type) => {
    axios.get(`https://api.github.com/users/${user}/${type}`)
      .then((result) => {
        this.setState({
          [type]: result.data.map((repo) => {
            return {
              name: repo.name,
              linl: repo.link
            }
          })
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const user = this.state.userInfo ? this.state.userInfo.login : '';
    
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={() => this.getRepos(user, 'repos')}
        getStarred={() => this.getRepos(user, 'starred')}
      />
    );
  }
}

export default App;
