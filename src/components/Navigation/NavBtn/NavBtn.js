//libraries
import React from 'react';
//styles
import classes from './NavBtn.scss';
//components

const navBtn = (props) => {
  
  let activeBtn = null;

  if(props.active) {
    activeBtn = classes.Active
  }
  return (
    <button className={classes.NavigationBtn + ' ' + activeBtn} onClick={props.clicked}>
      <span></span>
    </button>
  )
}

export default navBtn;
