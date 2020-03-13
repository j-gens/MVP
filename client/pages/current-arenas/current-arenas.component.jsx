import React from 'react';

import ContentList from '../../components/content-list/content-list.component.jsx';
import { fetchArenas } from '../../methods/fetch.utils.js';

import './current-arenas.styles.css';


class CurrentArenas extends React.Component {
  constructor() {
    super();
    this.state = {
      listHeaders: ['arena name', 'home team', 'city', 'state/province'],
      currentArenas: [],
    }
  }

  componentDidMount() {
    fetchArenas((data) => {
      this.setState({currentArenas: data});
    });
  }

  render() {
    const { listHeaders, currentArenas } = this.state;
    return (
      <div className="current-arenas-bin">
        <div className="current-arenas-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/NHL_arenas.jpg" alt="map with nhl arena locations" />
        </div>
        <div className="current-arenas-list">
          <span className="current-arenas-title">Current NHL Arenas (Spring 2020):</span>
          <ContentList listHeaders={listHeaders} arenas={currentArenas} />
        </div>
      </div>
    );
  }
}


export default CurrentArenas;
