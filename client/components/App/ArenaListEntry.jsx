import React from 'react';

const ArenaListEntry = (props) => {
  let endpoint = props.arena.team.split(' ');
  let hockeyurl = "http://www.nhl.com/" + endpoint[endpoint.length-1].toLowerCase();

  return (
    <tr className="content-list-table-row-top">
      <td>{props.arena.arenaName}</td>
      <td><a href={hockeyurl} target="_blank">{props.arena.team}</a></td>
      <td>{props.arena.city}</td>
      <td>{props.arena.stateProvince}</td>
    </tr>
  )
}



export default ArenaListEntry;
