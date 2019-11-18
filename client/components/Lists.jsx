import React from 'react';
import axios from 'axios';


class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }

    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    axios.get('/api/lists/')
  }

  render() {
    return (
      <div className="list-bin">
        <div className="list-user-bin">
          here are the users
        </div>
        <div className="list-content-bin">
          here are the lists
        </div>
      </div>
    )
  }
}

export default Lists;
