import React, { Component } from 'react';
import { apiCall } from '../../api/mockedApi';
import Card from '../Card';
import styles from './CardsContainer.module.scss';

class CardsContainer extends Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    apiCall().then((res) => this.setState({ cards: res }));
  }

  render() {
    const { cards } = this.state;

    return (
      <div className={styles['main-block']}>
        {cards.length === 0 ? (
          <div>No cards yet</div>
        ) : (
          cards.map((card) => (
            <Card key={card.id} header={card.header} text={card.text} />
          ))
        )}
      </div>
    );
  }
}

export default CardsContainer;
