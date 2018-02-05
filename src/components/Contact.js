import React, { PureComponent } from 'react';
import './Contact.css'

class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      firstNameIsValid: true,
      lastNameIsValid: true,
      emailIsValid: true,
      phoneIsValid: true,
      messageIsValid: true,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    const regexpEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

    if (name === "firstName") {
      this.setState({ firstNameIsValid: value && value.indexOf(' ') < 0 })
    }

    if (name === "lastName") {
      this.setState({ lastNameIsValid: value && value.indexOf(' ') < 0 })
    }

    if (name === "email") {
      this.setState({ emailIsValid: value && value.match(regexpEmail) !== null })
    }

    if (name === "message") {
      this.setState({ messageIsValid: value !== '' })
    }

    this.setState({
      [name]: value
    })
  }

  handleSubmit(){
    const { firstNameIsValid, lastNameIsValid, emailIsValid, messageIsValid } = this.state

    if ((firstNameIsValid===true && messageIsValid===true)&&(lastNameIsValid===true && emailIsValid===true)){
    }

  }


  render() {
    return (
      <div>
        <form className='form'>
          <input
            className={this.state.firstNameIsVal ? 'input' : 'input invalid'}
            name="firstName"
            type="text"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.handleInputChange} />

          <input
            className={this.state.lastNameIsVal ? 'input' : 'input invalid'}
            name="lastName"
            type="text"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleInputChange} />

          <input
            className={this.state.emailIsVal ? 'input' : 'input invalid'}
            name="email"
            type="text"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.handleInputChange} />

          <input
            className='input'
            name="phone"
            type="text"
            placeholder="Phone number (optional)"
            value={this.state.phone}
            onChange={this.handleInputChange} />

          <textarea
            className={this.state.messageIsVal ? 'textarea' : 'textarea invalid'}
            name="message"
            type="text"
            placeholder="Your message..."
            value={this.state.message}
            onChange={this.handleInputChange} />
        </form>

      <div className='send-button' onClick={this.handleSubmit.bind(this)}>
        <p>Send</p>
      </div>

      </div>
    );
  }
}

export default Contact;