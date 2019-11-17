import React from 'react';
import axios from 'axios';
import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import Quiz from './Quiz/Quiz.jsx';
import Routine from './Routine/Routine.jsx';
import Products from './Products/Products.jsx';
import Ingredients from './Ingredients/Ingredients.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationBar: ['Home', 'Quiz', 'Routine', 'Products', 'Ingredients'],
      currentDisplay: 'Home'
    }

    this.fetch = this.fetch.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {
    //this.fetch();
  }

  fetch() {
    //axios.get()
  }

  navigate(value) {
    this.setState({
      currentDisplay: value
    });
  }

  render() {
    let display;

    if (this.state.currentDisplay === 'Home') {
      display = <Home />
    } else if (this.state.currentDisplay === 'Quiz') {
      display = <Quiz />
    }else if (this.state.currentDisplay === 'Routine') {
      display = <Routine />
    } else if (this.state.currentDisplay === 'Products') {
      display = <Products />
    } else if (this.state.currentDisplay === 'Ingredients') {
      display = <Ingredients />
    }

    return (
      <div>
        <div className="header-bin">
          <div className="header-title">
            The Page Header
          </div>
          <Navigation bar={this.state.navigationBar} length={this.state.navigationBar.length} navigate={this.navigate} />
        </div>
        <div className="content-bin">
          {display}
        </div>
      </div>
    );
  }
}

export default App;
