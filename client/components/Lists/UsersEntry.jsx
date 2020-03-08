import React from 'react';


class UsersEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
  }

  handleClick = (e) => {
    const { user, changeView } = this.props;
    this.setState({
      user: user
    }, () => changeView(user));
  }

  render = () => {
    const { user } = this.props;
    return (
      <div className="list-user-entry" value={user} onClick={this.handleClick}>
        {user}
      </div>
    )
  }
}


export default UsersEntry;
