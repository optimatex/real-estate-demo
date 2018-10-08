import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, PropTypes as MobxTypes } from 'mobx-react';

import propertyType from '../../../common/types/propertyTypes';
import Spiner from '../../../common/components/Spinner';
import Row from './components/Row';
import './style.scss';

@observer
class Properties extends Component {
  static propTypes = {
    store: PropTypes.shape({
      isLoading: PropTypes.bool,
      collection: MobxTypes.arrayOrObservableArrayOf(propertyType),
      collectionSize: PropTypes.number,
      getProperties: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.props.store.getProperties();
  }

  renderTable = collection => (
    <table styleName="table">
      <thead>
        <tr>
          <th>Owner</th>

          <th>Address</th>

          <th>IncomeGenerated</th>

          <th>Service Area</th>
        </tr>
      </thead>

      <tbody>
        {collection.map(item => (
          <Row item={item} key={item.airbnbId} />
        ))}
      </tbody>
    </table>
  );

  render() {
    const {
      store: { collection, isLoading },
    } = this.props;
    return (
      <div>
        {isLoading ? (
          <Spiner styleName="spinner" />
        ) : (
          this.renderTable(collection)
        )}
      </div>
    );
  }
}
export default Properties;
