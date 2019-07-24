import React from 'react';
import classes from './Input.scss';

const input = (props) => {
    let inputElement = null;
    let errormsg = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
      inputClasses.push(classes.Invalid);
      errormsg = <p className={classes.ErrorMsg}>{props.errormsg}</p>
    }

    switch(props.elementType) {
      case('input'):
        inputElement = <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}/>;
        break;
      case('textarea'):
        inputElement = <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}/>;
        break;
      default:
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}/>;
    }

    return (
      <div className={classes.Input}>
        <label className={classes.Label}>{props.label} </label>
        {inputElement}
        {errormsg}
      </div>
  )
}

export default input;
