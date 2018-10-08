import React from 'react';
import { shallow } from 'enzyme';

import PropertiesStore from '../../stores/PropertiesStore';
import Spiner from '../../../common/components/Spinner';
import Properties from './';

describe('Properties component', () => {
  let wrap, defaultProps, store;

  beforeEach(() => {
    store = new PropertiesStore();
    defaultProps = {
      store,
    };
  });

  it('should render without errors', () => {
    wrap = shallow(<Properties {...defaultProps} />);

    expect(wrap).toHaveLength(1);
  });

  it('should render Spiner after mounting', () => {
    wrap = shallow(<Properties {...defaultProps} />);

    expect(wrap.find(Spiner)).toHaveLength(1);
  });

  it('should NOT render Spiner if data is NOT loading', () => {
    wrap = shallow(<Properties {...defaultProps} />);
    store.unsetLoading();

    expect(wrap.find(Spiner)).toHaveLength(0);
  });

  it('should request data after mounting', () => {
    const stub = jest
      .spyOn(store, 'getProperties')
      .mockImplementation(() => {});
    wrap = shallow(<Properties {...defaultProps} />);

    expect(stub).toHaveBeenCalled();
  });
});
