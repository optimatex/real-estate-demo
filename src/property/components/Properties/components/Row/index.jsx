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
      <div data-test="line-one">{address.line1}</div>

      {address.line2 && <div>{address.line2}</div>}

      {address.line3 && <div>{address.line3}</div>}

      <div data-test="line-four">{address.line4}</div>

      <div data-test="post">{address.postCode}</div>

      <div data-test="city">{address.city}</div>

      <div data-test="country">{address.country}</div>
    </td>
  );

  render() {
    const { item } = this.props;
    return (
      <tr>
        <td styleName="name">{item.owner}</td>

        {this.renderAdress(item.address)}

        <td data-test="income">{item.incomeGenerated} £</td>

        <td>
          {item.canService ? (
            <span styleName="in">✓ can service</span>
          ) : (
            <span styleName="out">🛇 out of service</span>
          )}
        </td>
      </tr>
    );
  }
}

export default Row;
