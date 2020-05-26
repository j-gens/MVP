import React from 'react';

import './bucket-list-entry.styles.css';


const BucketListEntry = ({ arena: { arenaName, homeTeam, awayTeam, date, winner } }) => (
  <tr>
    <td>{arenaName}</td>
    <td>{homeTeam}</td>
    <td>{awayTeam}</td>
    <td>{date}</td>
    <td>{winner}</td>
  </tr>
);


export default BucketListEntry;
