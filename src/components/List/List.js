import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    img: PropTypes.string,
    titleColumn: PropTypes.string,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <div>
        <section className={styles.component}>
          <Hero titleText={this.props.title} img={this.props.img} />
          <div className={styles.description}>
            {this.props.children}
          </div>
          <div className={styles.columns}>
            <Column titleColumn={'Animals'} />
            <Column titleColumn={'Plants'} />
            <Column titleColumn={'Minerals'} />
        </div>
        </section>
      </div>
    )
  }
}

export default List;
