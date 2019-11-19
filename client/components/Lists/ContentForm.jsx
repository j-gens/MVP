import React from 'react';

class ContentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arena: '',
      home: '',
      visitors: '',
      date: '  /  /  '
    }

    this.handleChange = this.handleChange.bind(this);
    this.findHomeTeam = this.findHomeTeam.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "arenas") {
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
    for (let i = 0; i < this.props.arenas.length; i++) {
      if (arena === this.props.arenas[i].arenaName) {
        this.setState({
          home: this.props.arenas[i].team
        })
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/users', {
      userName: this.props.user,
      arenaName: this.state.arena,
      homeTeam: this.state.home,
      awayTeam: this.state.visitors,
      date: this.state.date
      })
      .then((response) => {
        this.props.getUser();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('posted!')
      })
  }

  render() {
    return (
      <div className="content-form">
        <div className="list-user-title">
          Add another arena to {this.props.user}'s list:
        </div>
        <form className="arena-form">
          <label>
            Arena:
            <select name="arenas" onChange={this.handleChange}>
              {this.props.arenas.map(arena =>
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
            Date of Visit (mm/dd/yy):
            <input type="text" name="date" onChange={this.handleChange} />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default ContentForm;
