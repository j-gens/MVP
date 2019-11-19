import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="header-bin">
        <div className="header-title">
          Ice Bucket List
        </div>
        <div className="header-nav-bin">
          KEEP TRACK OF ALL THE NHL ARENAS YOU'VE VISITED
        </div>
      </div>
    )
  }
}

export default Header;
