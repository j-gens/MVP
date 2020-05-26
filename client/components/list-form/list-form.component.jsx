import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';

import './list-form.styles.css';


class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      arenaName: '',
      homeTeam: '',
      visitingTeam: '',
      date: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { arenaName, homeTeam, visitingTeam, date } = this.state;
    return (
      <div className='listform-bin'>
        <form>
          <span className='listform-title'>
            I attended another game!
          </span>
          <FormInput
            value={arenaName}
            handleChange={this.handleChange}
            type='text'
            name='arenaName'
            label='Arena Name'
          />
          <FormInput
            value={homeTeam}
            handleChange={this.handleChange}
            type='text'
            name='homeTeam'
            label='Home Team'
          />
          <FormInput
            value={visitingTeam}
            handleChange={this.handleChange}
            type='text'
            name='visitingTeam'
            label='Visitors'
          />
          <FormInput
            value={date}
            handleChange={this.handleChange}
            type='date'
            name='date'
            label=''
          />
        </form>
      </div>
    );
  }
}


export default ListForm;
