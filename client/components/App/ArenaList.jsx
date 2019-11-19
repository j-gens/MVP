import React from 'react';
import ArenaListEntry from './ArenaListEntry.jsx';

const ArenaList = (props) => (
  <div className="content-list-top">
    <table>
      <thead className="content-list-table-header-top">
        <td>Arena Name</td>
        <td>Home Team</td>
        <td>City</td>
        <td>State/Province</td>
      </thead>
      <tbody>
        {props.arenas.map(arena =>
          <ArenaListEntry arena={arena} />
        )}
      </tbody>
    </table>
  </div>
)


export default ArenaList;
