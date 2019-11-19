import React from 'react';
import axios from 'axios';
import ListContentEntry from './ContentEntry.jsx';

class ListContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arena: '',
      visitors: '',
      date: '  /  /  '
    }

    this.handleChange = this.handleChange.bind(this);
    this.findHomeTeam = this.findHomeTeam.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "name") {
      this.setState({
        userName: event.target.value
      });
    } else if (event.target.name === "arenas") {
      this.setState({
        arena: event.target.value
      });
      this.findHomeTeam(event.target.value);
    } else if (event.target.name === "date") {
      this.setState({
        date: event.target.value
      });
    } else if (event.target.name === "visitors") {
      this.setState({
        visitors: event.target.value
      })
    }
  }

  findHomeTeam(arena) {

  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/users', {

    })
  }

  render() {
    return (
      <div className="content-list">
          <div className="arena-form-title">
            {this.props.currentUser} 's List:
          </div>
          <div>
          <table>
            <thead className="content-list-table-header">
              <td>Arena Name</td>
              <td>Home Team</td>
              <td>Visiting Team</td>
              <td>Date of Visit</td>
            </thead>
            <tbody>
              {this.props.arenas.map(arena =>
                <ListContentEntry arena={arena} />
              )}
            </tbody>
          </table>
        </div>
        <div className="content-form">
          <form className="arena-form">
            <label>
              Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <label>
              Arena:
              <select name="arenas" onChange={this.handleChange}>
                {this.props.arenas.map(arena =>
                  <option value={arena.arenaName}>{arena.arenaName} - {arena.team}</option>
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
              Date of Visit (mm/dd/yy):
              <input type="text" name="date" onChange={this.handleChange} />
            </label>
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    );

  }
}

export default ListContent;
