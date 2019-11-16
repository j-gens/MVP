import React from 'react';
import axios from 'axios';
import Navigation from './Navigation.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }

    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    //this.fetch();
  }

  fetch() {
    //axios.get()
  }

  render() {
    return (
      <div>
        <div className="header-bin">
          <div className="header-title">
            Skintopeia
          </div>
          <Navigation />
        </div>
        <div className="content-bin">Content</div>
      </div>
    );
  }
}

export default App;
