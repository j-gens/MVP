import React from 'react';
import axios from 'axios';


class ContentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arena: '',
      home: '',
      visitors: '',
      date: '  /  /  '
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  findHomeTeam = (arena) => {
    const { arenas } = this.props;
    for (let i = 0; i < arenas.length; i++) {
      if (arena === arenas[i].arenaName) {
        this.setState({
          home: arenas[i].team
        })
      }
    }
  }

  handleFormSubmit = (event) => {
    const { arena, home, visitors, date } = this.state;
    const { getListByUser, user } = this.props;
    event.preventDefault();
    axios.post('/api/lists', {
      userName: this.props.user,
      arenaName: this.state.arena,
      homeTeam: this.state.home,
      awayTeam: this.state.visitors,
      date: this.state.date
      })
      .then(() => {
        getListByUser(user);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render = () => {
    const { user, arenas } = this.props;
    return (
      <div className="content-form">
        <div className="list-user-title">
          Add another arena to {user}'s list:
        </div>
        <form className="arena-form">
          <label>
            Arena:
            <select name="arena" onChange={this.handleChange}>
              {arenas.map(arena =>
                <option value={arena.arenaName}>{arena.arenaName} -- {arena.team}</option>
              )}
            </select>
          </label>
          <label>
            Visiting Team:
            <select name="visitors" onChange={this.handleChange}>
              {this.props.arenas.map(arena =>
                <option value={arena.team}>{arena.team}</option>
              )}
            </select>
          </label>
          <label>
            Date of Visit (mm/dd/yyyy):
            <input type="text" name="date" onChange={this.handleChange} />
          </label>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}


export default ContentForm;
