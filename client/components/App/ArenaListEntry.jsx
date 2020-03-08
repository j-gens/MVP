import React from 'react';


const ArenaListEntry = ({ arena: { team, arenaName, city, stateProvince } }) => {
  const endpoint = team.split(' ');
  const hockeyurl = "http://www.nhl.com/" + endpoint[endpoint.length-1].toLowerCase();

  return (
    <tr className="content-list-table-row-top">
      <td>{arenaName}</td>
      <td><a href={hockeyurl} target="_blank">{team}</a></td>
      <td>{city}</td>
      <td>{stateProvince}</td>
    </tr>
  );
}


export default ArenaListEntry;
