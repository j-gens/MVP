import React from 'react';
import axios from 'axios';
import Users from './Lists/Users.jsx';
import ListContent from './Lists/Content.jsx';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arenas: [],
      users: ['jules', 'user1', 'hello'],
      usersData: [],
      currentUser: 'createNew'
    }

    this.fetchArenas = this.fetchArenas.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.changeView = this.changeView.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  fetchArenas() {
    axios.get('/api/arenas/')
      .then((response) => {
        this.setState({
          arenas: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('success', this.state.arenas);
        this.fetchUsers();
      })
  }

  fetchUsers() {
    axios.get('api/users')
      .then((response) => {
        this.setState({
          users: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('success'. this.state.users);
      })
  }

  componentDidMount() {
    this.fetchArenas();
  }

  changeView(name) {
    this.setState({
      currentUser: name
    })
  }

  handleClick(event) {
    this.setState({
      currentUser: event.target.value
    })
  }

  render() {
    return (
      <div className="list-bin">
        <div className="list-user-bin">
          <div className="list-user-title">
            Current Users:
          </div>
          <div>
            <div className="list-user-entry" value="createNew" onClick={this.handleClick}>
              Create a New User
            </div>
            <Users users={this.state.users} changeView={this.changeView} />
          </div>
        </div>
        <div className="list-content-bin">
          <ListContent currentUser={this.state.currentUser} arenas={this.state.arenas} />
        </div>
      </div>
    )
  }
}

export default Lists;
