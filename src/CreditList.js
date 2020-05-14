import React from 'react';
import CreditAddForm from './CreditAddForm';

export default class CreditList extends React.Component {

  state = {
    credits: []
  }

  getCredits = () => {
    fetch('http://localhost:3001/credits')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ credits: data });
      });
  }

  componentDidMount = () => {
    this.getCredits();
  }

  onAdd = (credit) => {
    this.setState({credits: [...this.state.credits, credit]});
  }

  render = () => {
    return (
      <section>
        {this.state.credits.map(credit => (
          <div key={credit.id}>
            <p>Клиент: {credit.name}</p>
            <p>Цель: {credit.purpose}</p>
            <p>Сумма: {credit.sum}</p>
            <p>Срок: {credit.date}</p>
          </div>
        ))}
        <CreditAddForm onAdd={this.onAdd} token={this.props.token} />
      </section>
    );
  }

}
