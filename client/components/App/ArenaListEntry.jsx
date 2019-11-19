import React from 'react';

const ArenaListEntry = (props) => (
  <tr className="content-list-table-row-top">
    <td>{props.arena.arenaName}</td>
    <td>{props.arena.team}</td>
    <td>{props.arena.city}</td>
    <td>{props.arena.stateProvince}</td>
  </tr>
)


export default ArenaListEntry;
