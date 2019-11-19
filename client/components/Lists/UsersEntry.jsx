import React from 'react';

class UsersEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.target)
    this.props.changeView(event.target.value);
  }

  render() {
    return (
      <div className="list-user-entry" value={this.props.user} onClick={this.handleClick}>
        {this.props.user}
      </div>
    )
  }
}


export default UsersEntry;
