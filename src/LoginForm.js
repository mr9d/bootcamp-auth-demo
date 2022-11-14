import React from 'react';

export default class LoginForm extends React.Component {

  state = {
    login: '',
    pass: ''
  }

  handleInput = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const requestBody = {
      login: this.state.login,
      pass: this.state.pass
    };
    fetch('http://localhost:3001/token', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: { 'Content-type': 'application/json' }
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      this.props.onLogin(data.login);
    });
  }

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="login">Логин</label>
        <input type="text" id="login" onChange={this.handleInput} value={this.state.login} />
        <label htmlFor="pass">Пароль</label>
        <input type="password" id="pass" onChange={this.handleInput} value={this.state.pass} />
        <button type="submit">Вход</button>
      </form>
    );
  }
}
