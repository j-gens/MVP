import React from 'react';
import axios from 'axios';
import Navigation from './Navigation.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navigationBar: ['Home', 'Quiz', 'Routine', 'Products', 'Ingredients'],
      currentDisplay: 'Home'
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
          <Navigation bar={this.state.navigationBar} length={this.state.navigationBar.length} />
        </div>
        <div className="content-bin">Content</div>
      </div>
    );
  }
}

export default App;
