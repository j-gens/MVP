import React from 'react';


const ListContentEntry = ({ arena: { arenaName, homeTeam, awayTeam, date } }) => (
  <tr className="content-list-table-row">
    <td>{arenaName}</td>
    <td>{homeTeam}</td>
    <td>{awayTeam}</td>
    <td>{date}</td>
    <td className="row-hover-button">X</td>
  </tr>
);


export default ListContentEntry;

