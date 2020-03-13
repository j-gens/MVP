import React from 'react';

import CurrentListEntry from '../current-list-entry/current-list-entry.component.jsx';
import BucketListEntry from '../bucket-list-entry/bucket-list-entry.component.jsx';

import './content-list.styles.css';


const ContentList = ({ bucketList, listHeaders, arenas }) => (
  <div className="content-list-bin">
    <table className="cl-table">
      <thead className="cl-table-header">
        <tr>
          {
            listHeaders.map((header) =>
            <td key={header}>{header.toUpperCase()}</td>)
          }
        </tr>
      </thead>
      <tbody className="cl-table-body">
        {
          bucketList ?
          arenas.map((arena) =>
          <BucketListEntry key={arena._id} arena={arena} />)
          :
          arenas.map((arena) =>
          <CurrentListEntry key={arena._id} arena={arena} />)
        }
      </tbody>
    </table>
  </div>
);


export default ContentList;
