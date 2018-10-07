import React, { Component } from 'react';
import { observer } from 'mobx-react';

import propertyType from '../../../../../common/types/propertyTypes';
import './style.scss';

@observer
class Row extends Component {
  static propTypes = {
    item: propertyType,
  };

  renderAdress = address => (
    <td>
      <div>{address.line1}</div>

      {address.line2 && <div>{address.line2}</div>}

      {address.line3 && <div>{address.line3}</div>}

      <div>{address.line4}</div>

      <div>{address.postCode}</div>

      <div>{address.city}</div>

      <div>{address.country}</div>
    </td>
  );

  render() {
    const { item } = this.props;
    return (
      <tr>
        <td styleName="name">{item.owner}</td>

        {this.renderAdress(item.address)}

        <td>{item.incomeGenerated} £</td>
      </tr>
    );
  }
}

export default Row;
