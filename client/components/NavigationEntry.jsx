import React from 'react';

class NavigationEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.barItem
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.navigate(this.state.value);
  }

  render (props) {
    let menuDivider;
    if (this.props.index === (this.props.length - 1)) {
      menuDivider = '';
    } else {
      menuDivider = '||';
    }

    return (
      <div className="nav-duet">
        <div className="nav-item" onClick={this.handleClick}>
          {this.props.barItem}
        </div>
        <div className="nav-item">
          {menuDivider}
        </div>
      </div>
    )
  }
}


export default NavigationEntry;
