import React from 'react';
import ListContentEntry from './ContentEntry.jsx';
import ContentForm from './ContentForm.jsx';

const ListContent = (props) => (
  <div className="content-list-top">
      <div className="arena-form-title">
        {props.currentUser}'s List ({props.currentList.length} out of 31):
      </div>
      <div>
      <table>
        <thead className="content-list-table-header">
          <td>Arena Name</td>
          <td>Home Team</td>
          <td>Visiting Team</td>
          <td>Date of Visit</td>
        </thead>
        <tbody>
          {props.currentList.map(arena =>
            <ListContentEntry arena={arena} />
          )}
        </tbody>
      </table>
    </div>
    <ContentForm getListByUser={props.getListByUser} user={props.currentUser} arenas={props.arenas} />
  </div>
)


export default ListContent;
