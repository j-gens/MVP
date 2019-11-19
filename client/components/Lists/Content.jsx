import React from 'react';
import axios from 'axios';
import ListContentEntry from './ContentEntry.jsx';
import ContentForm from './ContentForm.jsx';

const ListContent = (props) => (
  <div className="content-list">
      <div className="arena-form-title">
        {this.props.currentUser}'s List ({this.props.currentList.length} out of 31):
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
          {this.props.currentList.map(arena =>
            <ListContentEntry arena={arena} />
          )}
        </tbody>
      </table>
    </div>
    <ContentForm getUser={this.props.getUser} user={this.props.currentUser} arenas={this.props.arenas} />
  </div>
)


export default ListContent;
