import React from 'react';
import axios from 'axios';
import Users from './Lists/Users.jsx';
import ListContent from './Lists/Content.jsx';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arenas: [],
      users: [],
      currentUser: '',
      newUser: ''
    }

    this.fetchArenas = this.fetchArenas.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.postUser = this.postUser.bind(this);
    this.changeView = this.changeView.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    axios.get('/api/users')
      .then((response) => {
        console.log('response ', response)
        let userList = [];
        for (let i = 0; i < response.data.length; i++) {
          userList.push(response.data[i].username);
        }
        this.setState({
          users: userList
        })
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('user success', this.state.users);
      })
  }

  postUser() {
    event.preventDefault();
    axios.post('/api/users', {userName: this.state.newUser})
      .then((response) => {
        this.fetchUsers();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({
          newUser: ''
        })
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

  handleChange(event) {
    this.setState({
      newUser: event.target.value
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
            <Users users={this.state.users} changeView={this.changeView} />
            <form>
              <label>
                Create New:
                <input type="text" name="user" onChange={this.handleChange} />
              </label>
              <button onClick={this.postUser}>Submit</button>
            </form>
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
