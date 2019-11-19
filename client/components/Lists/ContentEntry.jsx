import React from 'react';

const ListContentEntry = (props) => (
  <tr className="content-list-table-row">
    <td>{props.arena.arenaName}</td>
    <td>{props.arena.homeTeam}</td>
    <td>{props.arena.awayTeam}</td>
    <td>{props.arena.date}</td>
    <td className="row-hover-button">X</td>
  </tr>
)


export default ListContentEntry;

