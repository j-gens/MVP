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
      currentUserList: [],
      newUser: ''
    }

    this.fetchArenas = this.fetchArenas.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.postUser = this.postUser.bind(this);
    this.changeView = this.changeView.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.fetchUserList = this.fetchUserList.bind(this);
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
          userList.push(response.data[i].userName);
        }
        this.setState({
          users: userList,
          currentUser: userList[0]
        })
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.fetchUserList(this.state.currentUser);
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
        });
      })
  }

  componentDidMount() {
    this.fetchArenas();
  }

  changeView(name) {
    this.setState({
      currentUser: name
    });
    this.fetchUserList(name);
  }

  fetchUserList(name) {
    axios.get(`/api/lists/${name}`)
      .then((response) => {
        this.setState({
          currentUserList: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('user list ', this.state.currentUserList);
      })
  }

  handleUserChange(event) {
    this.setState({
      newUser: event.target.value
    });
  }

  render() {
    return (
      <div className="list-bin">
        <div className="list-user-bin">
          <div className="list-user-title">
            Current Users:
          </div>
          <div>
            <div className="linebreak"><hr></hr></div>
            <Users users={this.state.users} changeView={this.changeView} />
            <div className="linebreak"><hr></hr></div>
            <form className="user-form">
              <label>
                Create New:
                <input type="text" name="user" onChange={this.handleUserChange} />
              </label>
              <button onClick={this.postUser}>Submit</button>
            </form>
          </div>
        </div>
        <div className="list-content-bin">
          <ListContent currentUser={this.state.currentUser} currentList={this.state.currentUserList} getListByUser={this.fetchUserList} arenas={this.state.arenas} />
        </div>
      </div>
    )
  }
}

export default Lists;
