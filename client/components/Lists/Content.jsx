import React from 'react';
import ListContentEntry from './ContentEntry.jsx';
import ContentForm from './ContentForm.jsx';


const ListContent = ({ currentUser, currentList, ...otherProps }) => (
  <div className="content-list-top">
      <div className="arena-form-title">
        {currentUser}'s List ({currentList.length} out of 31):
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
          {currentList.map(arena =>
            <ListContentEntry arena={arena} />
          )}
        </tbody>
      </table>
    </div>
    <ContentForm user={currentUser} {...otherProps} />
  </div>
)


export default ListContent;
