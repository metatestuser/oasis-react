import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

import styles from './InfoBox.scss';
import CSSModules from "react-css-modules/dist/index";

const propTypes = PropTypes && {
  children: PropTypes.node,
  color: PropTypes.string,
  justifyContent: PropTypes.string,
  vertical: PropTypes.bool,
};

const defaultProps = {
    color: "default",
    vertical: false,
    className: '',
    justifyContent: 'normal'
};

export class InfoBox extends PureComponent {

  render() {
    const { color, vertical, justifyContent, className } = this.props;
    return (
      <div
          style={{justifyContent: justifyContent}}
          className={`${styles.box} ${styles[color]} ${vertical ? styles.vertical : ''} ${className}`}
      >
          {this.props.children}
      </div>
    );
  }
}

InfoBox.displayName = 'InfoBox';
InfoBox.propTypes = propTypes;
InfoBox.defaultProps = defaultProps;
export default CSSModules(InfoBox, styles);