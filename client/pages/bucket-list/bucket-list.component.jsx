import React from 'react';

import ContentList from '../../components/content-list/content-list.component.jsx';
import ListForm from '../../components/list-form/list-form.component.jsx';
import { fetchUsersList } from '../../methods/fetch.utils.js';

import './bucket-list.styles.css';


class BucketList extends React.Component {
  constructor() {
    super();
    this.state = {
      listHeaders: ['arena name', 'home team', 'visiting team', 'date of game', 'game winner'],
      arenas: [{
        _id: 1,
        arenaName: 'SAP',
        homeTeam: 'sharks',
        awayTeam: 'flames',
        date: '12/20/2017',
        winner: 'sharks',
      }],
    };
  }

  componentDidMount() {
    fetchUsersList('jules', (data) => {
      this.setState({arenas: data});
    });
  }

  render() {
    const { listHeaders, arenas } = this.state;
    return (
      <div className='list-page-bin'>
        <div className='list-page-form'>
          <ListForm />
        </div>
        <div className='list-page-list'>
          <ContentList bucketList listHeaders={listHeaders} arenas={arenas} />
        </div>
      </div>
    );
  }
}


export default BucketList;
