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
  }

  fetchArenas = () => {
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
        this.fetchUsers();
      })
  }

  fetchUsers = () => {
    axios.get('/api/users')
      .then((response) => {
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
      })
  }

  postUser = () => {
    const { newUser } = this.state;
    event.preventDefault();
    axios.post('/api/users', {userName: newUser})
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

  componentDidMount = () => {
    this.fetchArenas();
  }

  changeView = (name) => {
    this.setState({
      currentUser: name
    }, () => this.fetchUserList(name));
  }

  fetchUserList = (name) => {
    axios.get(`/api/lists/${name}`)
      .then((response) => {
        this.setState({
          currentUserList: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleUserChange = (event) => {
    const { value } = event.target;
    this.setState({
      newUser: value
    });
  }

  render = () => {
    const { users, currentUser, currentUserList, arenas } = this.state;
    return (
      <div className="list-bin">
        <div className="list-user-bin">
          <div className="list-user-title">
            Current Users:
          </div>
          <div>
            <div className="linebreak"><hr></hr></div>
            <Users users={users} changeView={this.changeView} />
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
          <ListContent currentUser={currentUser} currentList={currentUserList} getListByUser={this.fetchUserList} arenas={arenas} />
        </div>
      </div>
    )
  }
}


export default Lists;
