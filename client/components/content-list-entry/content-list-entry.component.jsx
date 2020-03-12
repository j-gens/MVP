import React from 'react';

import './content-list-entry.styles.css';


const ContentListEntry = ({ arena: { arenaName, team, city, stateProvince } }) => (
  <tr className="content-list-row">
    <td>{arenaName}</td>
    <td>{team}</td>
    <td>{city}</td>
    <td>{stateProvince}</td>
  </tr>
);


export default ContentListEntry;
