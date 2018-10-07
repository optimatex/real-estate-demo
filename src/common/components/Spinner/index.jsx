import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import './style.scss';

@observer
class Spiner extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;
    return (
      <div styleName="spinner" className={className}>
        <div styleName="circle" />
      </div>
    );
  }
}

export default Spiner;
