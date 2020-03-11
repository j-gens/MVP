import React from 'react';

import './content-list.styles.css';


const ContentList = ({ listHeaders, arenas }) => (
  <div className="content-list-bin">
    <table className="cl-table">
      <thead className="cl-table-header">
        <tr>
          {listHeaders.map((header, index) =>
            <td key={index}>{header.toUpperCase()}</td>
          )}
        </tr>
      </thead>
      <tbody className="cl-table-body">

      </tbody>
    </table>
  </div>
);


export default ContentList;
