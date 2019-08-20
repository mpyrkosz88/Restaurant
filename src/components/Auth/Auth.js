import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../UI/Modal/Modal';
import Backdrop from '../UI/Backdrop/Backdrop';
import Input from '../../components/UI/Input/Input';
import ReactAux from '../../hoc/ReactAux/ReactAux';

import classes from './Auth.scss';

import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/auth';

class Auth extends Component {

  state = {
    formIsValid: false,
    login: true,
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value: '',
        errormsg: 'Please type valid e-mail',
        validation: {
          required: true,
          checkedEmail: true,
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        errormsg: 'Minimal length of password is 6',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
  }

  changeToRegister = () => {
    this.setState({
      formIsValid: false,
      login: false,
      controls: {
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Your E-Mail'
          },
          value: '',
          errormsg: 'Please type valid e-mail',
          validation: {
            required: true,
            checkedEmail: true,
          },
          valid: false,
          touched: false
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'Password'
          },
          value: '',
          errormsg: 'Minimal length of password is 6',
          validation: {
            required: true,
            minLength: 6
          },
          valid: false,
          touched: false
        },
        street: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Enter your street'
          },
          value: '',
          errormsg: 'Minimal length of street is 3',
          validation: {
            required: true,
            minLength: 3
          },
          valid: false,
          touched: false
        },
        number: {
          elementType: 'input',
          elementConfig: {
            type: 'tel',
            placeholder: 'Enter your phone number',
            maxLength:"9",
          },
          value: '',
          errormsg: 'Minimal length of number is 9',
          validation: {
            required: true,
            minLength: 9
          },
          valid: false,
          touched: false
        }
      },
    })
  }

  changeToLogin = () => {
    this.setState({
      formIsValid: false,
      login: true,
      controls: {
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Your E-Mail'
          },
          value: '',
          errormsg: 'Please type valid e-mail',
          validation: {
            required: true,
            checkedEmail: true,
          },
          valid: false,
          touched: false
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'Password'
          },
          value: '',
          errormsg: 'Minimal length of password is 6',
          validation: {
            required: true,
            minLength: 6
          },
          valid: false,
          touched: false
        },
      },
    })
  }

  checkValiditiy(value, rules) {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }

    if (rules.checkedEmail) {
      isValid = !((value.indexOf('@', 1) == -1) || (value.indexOf('.', 1) == -1))
    }

    return isValid;
  }


  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValiditiy(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    }
    
    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }
    this.setState({ controls: updatedControls, formIsValid: formIsValid})

  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.login)
  }

  render() {

    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });

    }
    
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p className={classes.Error}>{this.props.error.message}</p>
      )
    }

    let form = (
      <form onSubmit={this.submitHandler}>
        {formElementsArray.map(formElement => {
          return (
            <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
            errormsg={formElement.config.errormsg} />
          )
        }
        )}
          
        {
          this.state.login ?
          <div className={classes.ButtonContainer}>
          {errorMessage}
            {this.state.formIsValid ? <button>Log In </button> :
            <button disabled>Log In
            </button> }
              <p>If you dont have account <span onClick={this.changeToRegister}>click here</span> to register</p>
            </div>
            :
            <div className={classes.ButtonContainer}>
            {this.state.formIsValid ? <button>Register </button> :
              <button disabled>Register
              </button> }
              <p>If you already have account <span onClick={this.changeToLogin}>click here</span> to login</p>
            </div>
        }

      </form>
    )


    return (
      <ReactAux>
        <Modal show={this.props.modalIsOpen} clicked={this.props.closeModal} >
          <div className={classes.Auth}>
            {form}
          </div>
        </Modal>
        <Backdrop show={this.props.modalIsOpen} />
      </ReactAux>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    modalIsOpen: state.auth.modalIsOpen,
    error:state.auth.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch({ type: actionTypes.CLOSE_MODAL }),
    onAuth: (email, password, login) => dispatch(actions.auth(email, password, login)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)