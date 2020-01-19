import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <div>
    <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img className={styles.image} src={props.img} />
    </header>
  </div>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  img: PropTypes.string,
}

export default Hero;