import React from 'react';
import axios from 'axios';
import ArenaList from './App/ArenaList.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      arenas: []
    }
  }

  fetch = () => {
    axios.get('/api/arenas/')
      .then((response) => {
        this.setState({
          arenas: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount = () => {
    this.fetch();
  }

  render = () => {
    const { arenas } = this.state;
    return (
      <div className="content-bin">
        <div className="content-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/NHL_arenas.jpg"></img>
        </div>
        <div className="content-image-list">
          <div className="list-user-title-top">
            Current NHL Arenas:
          </div>
          <ArenaList arenas={arenas} />
        </div>
      </div>
    )
  }
}


export default App;
