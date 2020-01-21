import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
          }
        ]    
      }
    ));
  }

  render() {
    return (
        <section className={styles.component}>
            <h3 className={styles.title}>{this.props.title}</h3>
            <div>
              {this.props.cards.map(({key, ...cardProps}) => (
                <Card  key={key} {...cardProps} />
              ))}
            </div>
            <div>
              <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
            </div>
          </section>
    )
  }
}

export default Column;
