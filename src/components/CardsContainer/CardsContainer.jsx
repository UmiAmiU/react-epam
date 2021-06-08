import React, { useState, useEffect } from 'react';
import { apiCall } from '../../api/mockedApi';
import Card from '../Card';
import CardCreationForm from '../CardCreationForm';
import styles from './CardsContainer.module.scss';

function CardsContainer(props) {
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    apiCall().then((res) => setCards(res));
  }, []);

  const handleChange = (event) => {
    if (event.target.value === 'Submit') {
      setCards([...cards, { ...formData, id: randomInt(1, 1000000) }]);
      setFormData({});
      return;
    }
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const removeHandler = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className={styles['main-block']}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          header={card.header}
          text={card.text}
          remove={removeHandler}
        />
      ))}
      <CardCreationForm handler={handleChange} />
    </div>
  );
}

function randomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export default CardsContainer;
