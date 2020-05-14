import React from 'react';

export default class CreditAddForm extends React.Component {

  state = {
    name: '',
    purpose: '',
    sum: '',
    date: ''
  }

  handleInput = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const requestBody = {
      name: this.state.name,
      purpose: this.state.purpose,
      sum: this.state.sum,
      date: this.state.date,
      token: this.props.token,
    };
    fetch('http://localhost:3001/credits', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: { 'Content-type': 'application/json' }
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      this.props.onAdd(data);
    });
  }

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Клиент</label>
        <input type="text" id="name" onChange={this.handleInput} value={this.state.name} />
        <label htmlFor="purpose">Цель</label>
        <input type="text" id="purpose" onChange={this.handleInput} value={this.state.purpose} />
        <label htmlFor="sum">Сумма</label>
        <input type="text" id="sum" onChange={this.handleInput} value={this.state.sum} />
        <label htmlFor="date">Срок</label>
        <input type="text" id="date" onChange={this.handleInput} value={this.state.date} />
        <button type="submit">Выдать кредит</button>
      </form>
    );
  }
}
