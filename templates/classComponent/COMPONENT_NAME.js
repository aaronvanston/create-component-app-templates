import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './COMPONENT_NAME.css';

class COMPONENT_NAME extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        COMPONENT_NAME
      </div>
    );
  }
}

COMPONENT_NAME.propTypes = {};

COMPONENT_NAME.defaultProps = {};

export default COMPONENT_NAME;
