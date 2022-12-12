import {Component} from 'react'

import './index.css'

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',
    dateOfBirth: '',
    Email: '',
    Display: 'flase',
  }

  firstName = event => {
    const firstname = event.target.value
    this.setState({firstName: firstname})
  }

  lastname = event => {
    const lastname = event.target.value
    this.setState({lastName: lastname})
  }

  number = event => {
    const number = event.target.value
    this.setState({phone: number})
  }

  dateofbirth = event => {
    const dateofbirth = event.target.value
    this.setState({dateOfBirth: dateofbirth})
  }

  email = event => {
    const email = event.target.value
    this.setState({Email: email})
  }

  button = () => {
    const {firstName, lastName, phone, Email, dateOfBirth} = this.state
    const a =
      firstName !== '' &&
      lastName !== '' &&
      phone !== '' &&
      Email !== '' &&
      dateOfBirth !== ''
    if (a === true) {
      return this.setState({Display: true})
    }
    this.setState({Display: false})
    // eslint-disable-next-line
    return alert('FILL THE ALL DETAILS')
  }

  render() {
    const {firstName, lastName, phone, Email, dateOfBirth, Display} = this.state
    let display
    if (Display === true) {
      display = (
        <table border={1} cellPadding={10} className="content-table">
          <tr>
            <td className="margin">First Name</td>
            <td className="margin">Last Name</td>
            <td className="margin">Phone</td>
            <td className="margin">Date Of Birth</td>
            <td className="margin">Email</td>
          </tr>
          <tr className='active-row'>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phone}</td>
            <td>{dateOfBirth}</td>
            <td>{Email}</td>
          </tr>
        </table>
      )
    }

    return (
      <div className="bg">
        <div className="headingALine">
          <h1 className="heading">React Form</h1>
        </div>
        <div className="boxesAline">
          <div className="card">
            <form>
              <p className="name">First Name</p>
              <input
                type="text"
                placeholder="enter the first name"
                className="input"
                onChange={this.firstName}
              />

              <p className="name">Last Name</p>
              <input
                type="text"
                placeholder="enter the last name"
                className="input"
                onChange={this.lastname}
              />
              <p className="name">Date Of Month</p>
              <input
                type="text"
                placeholder="MM/YY/DD"
                className="input"
                onChange={this.dateofbirth}
              />

              <p className="name">Contact Number</p>
              <input
                type="number"
                placeholder="enter the number"
                className="input"
                onChange={this.number}
              />

              <p className="name">Email</p>
              <div className="buttonAline">
                <div>
                  <input
                    type="email"
                    placeholder="Example@gmail.com"
                    className="input"
                    onChange={this.email}
                  />
                </div>
                <button className="button" type="button" onClick={this.button}>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="box">{display}</div>
        </div>
      </div>
    )
  }
}

export default App
