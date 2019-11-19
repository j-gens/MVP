import React from 'react';
import axios from 'axios';
import ListContentEntry from './ContentEntry.jsx';
import ContentForm from './ContentForm.jsx';

class ListContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="content-list">
          <div className="arena-form-title">
            {this.props.currentUser} 's List:
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
              {this.props.arenas.map(arena =>
                <ListContentEntry arena={arena} />
              )}
            </tbody>
          </table>
        </div>
        <ContentForm user={this.props.currentUser} arenas={this.props.arenas} />
      </div>
    );

  }
}

export default ListContent;
