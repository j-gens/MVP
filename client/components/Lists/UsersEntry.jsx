import React from 'react';

class UsersEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      user: this.props.user
    })

    this.props.changeView(this.props.user);
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
