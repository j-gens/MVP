import React from 'react';

import ContentList from '../../components/content-list/content-list.component.jsx';

import './current-arenas.styles.css';


class CurrentArenas extends React.Component {
  constructor() {
    super();
    this.state = {
      currentArenas: [],
    }
  }

  render() {
    return (
      <div className="current-arenas-bin">
        <div className="current-arenas-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/NHL_arenas.jpg" alt="map with nhl arena locations" />
        </div>
        <div className="current-arenas-list">
          <h2>Current Arenas:</h2>
          <ContentList />
        </div>
      </div>
    );
  }
}


export default CurrentArenas;
