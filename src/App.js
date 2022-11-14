import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import CreditList from './CreditList';

class App extends React.Component {

  state = {
    //token: '',
    username: ''
  }

  onLogin = (username) => {
    this.setState({ username });
    // localStorage.setItem('token', token);
    // localStorage.setItem('username', username);
  }

  render = () => {
    return (
      <BrowserRouter>
        {this.state.username && <p>Hello, {this.state.username}</p>}
        <Link to="/reg">Регистрация</Link>
        <Link to="/login">Вход</Link>
        <Link to="/logout">Выход</Link>
        <Link to="/">Кредиты</Link>
        <Route path="/reg" exact>
          <h1>Регистрация</h1>
        </Route>
        <Route path="/login" exact>
          <h1>Вход</h1>
          <LoginForm onLogin={this.onLogin} />
        </Route>
        <Route path="/logout" exact>
          <h1>Выход</h1>
        </Route>
        <Route path="/" exact>
          <h1>Кредиты</h1>
          <CreditList token={this.state.token} />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
