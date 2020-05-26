import React from 'react';

import './current-list-entry.styles.css';


const CurrentListEntry = ({ arena: { arenaName, team, city, stateProvince } }) => (
  <tr className='content-list-row'>
    <td>{arenaName}</td>
    <td>{team}</td>
    <td>{city}</td>
    <td>{stateProvince}</td>
  </tr>
);


export default CurrentListEntry;
