//libraries
import React, { Component } from 'react';
import classes from "./Contact.scss";

import Input from '../../UI/Input/Input';

class Contact extends Component {
  state = {
    orderForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Name'
          },
          value: '',
          errormsg: 'Min. length of name is 3',
          validation: {
            required: true,
            minLength: 3,
          },
          valid: false,
          touched: false
        },
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
        subject: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Subject'
          },
          value: '',
          errormsg: 'Min. length of subject is 3',
          validation: {
            required: true,
            minLength: 3,
          },
            valid: false,
            touched: false
        },
        message: {
          elementType: 'textarea',
          elementConfig: {
            type: 'text',
            placeholder: 'Message'
          },
          value: '',
          errormsg: 'Min. length of message is 7',
          validation: {
            required: true,
            minLength: 7,
          },
            valid: false,
            touched: false
        },

    },
    formIsValid: false,
}

submitHandler = ( event ) => {
  event.preventDefault();
}

checkValiditiy(value, rules) {
  let isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if(rules.minLength) {
    isValid = value.length >= rules.minLength && isValid
  }

  if(rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid
  }
  if(rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid
  }

  if(rules.checkedEmail) {
    isValid = !((value.indexOf('@',1) == -1)  || (value.indexOf('.', 1) == -1))
  }
  
  return isValid;
}


inputChangedHandler = (event, inputIdentifier) => {
  const updatedOrderForm = {
    ...this.state.orderForm
  }
  const updatedFormElement = {
    ...updatedOrderForm[inputIdentifier]
  }
  updatedFormElement.value = event.target.value;
  updatedFormElement.valid = this.checkValiditiy(updatedFormElement.value, updatedFormElement.validation);
  updatedFormElement.touched = true;
  updatedOrderForm[inputIdentifier] = updatedFormElement;

  let formIsValid = true;
  for (let inputIdentifier in updatedOrderForm) {
    formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
  }

  this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
}

  render() {

    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    let form = (
      <form onSubmit={this.submitHandler}>
      {formElementsArray.map(formElement => {
        return (
          <Input key= {formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched} 
          changed={(event) => this.inputChangedHandler(event, formElement.id)}
          errormsg={formElement.config.errormsg}
          />
        )
      })}
      <div className={classes.ButtonContainer}>
        <button disabled={!this.state.formIsValid}>Send</button>
      </div>  
      </form>
    )
    return (
      <section className={classes.Contact}>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1326.029895284756!2d-122.38766379291398!3d37.7701533780285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fc4fe7ace37%3A0xfa1746dd4faeb818!2s500+Terry+A+Francois+Blvd%2C+San+Francisco%2C+CA+94158%2C+Stany+Zjednoczone!5e0!3m2!1spl!2spl!4v1563448393990!5m2!1spl!2spl"></iframe>
        </div>
        <div>
          {form}
        </div>
        </section>
    )
  }
}

export default Contact;
