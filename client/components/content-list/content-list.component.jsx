import React from 'react';

import ContentListEntry from '../content-list-entry/content-list-entry.component.jsx';

import './content-list.styles.css';


const ContentList = ({ listHeaders, arenas }) => (
  <div className="content-list-bin">
    <table className="cl-table">
      <thead className="cl-table-header">
        <tr>
          {
            listHeaders.map((header, index) =>
            <td key={index}>{header.toUpperCase()}</td>)
          }
        </tr>
      </thead>
      <tbody className="cl-table-body">
        {
          arenas.map(arena =>
          <ContentListEntry arena={arena} />)
        }
      </tbody>
    </table>
  </div>
);


export default ContentList;