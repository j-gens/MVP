import React from 'react';
import NavigationEntry from './NavigationEntry.jsx';

const Navigation = (props) => (
  <div className="header-navigation">
    {props.bar.map((barItem, index) =>
      <NavigationEntry barItem={barItem} index={index} length={props.length} navigate={props.navigate} />
    )}
  </div>
)

export default Navigation;
