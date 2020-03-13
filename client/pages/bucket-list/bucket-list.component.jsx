import React from 'react';

import ContentList from '../../components/content-list/content-list.component.jsx';
import ListForm from '../../components/list-form/list-form.component.jsx';

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
        visitingTeam: 'flames',
        date: '12/20/2017',
        winner: 'sharks',
      }],
    };
  }

  render() {
    const { listHeaders, arenas } = this.state;
    return (
      <div className='list-page-bin'>
        <div className='list-page-form'>
          <ListForm />
        </div>
        <div className='list-page-list'>
          <ContentList listPage listHeaders={listHeaders} arenas={arenas} />
        </div>
      </div>
    );
  }
}


export default BucketList;
