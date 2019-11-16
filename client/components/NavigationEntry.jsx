import React from 'react';

const NavigationEntry = (props) => {
  let menuDivider;
  if (props.index === (props.length - 1)) {
    menuDivider = '';
  } else {
    menuDivider = '||';
  }
  return (
    <div className="nav-duet">
      <div className="nav-item">
        {props.barItem}
      </div>
      <div className="nav-item">
        {menuDivider}
      </div>
    </div>
  )
}


export default NavigationEntry;
