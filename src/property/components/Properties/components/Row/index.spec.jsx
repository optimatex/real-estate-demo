import React from 'react';
import { shallow } from 'enzyme';

import Row from './';

describe('Row component', () => {
  let wrap, defaultProps, item;

  beforeEach(() => {
    item = {
      owner: 'carlos',
      address: {
        line1: 'Flat 5',
        line4: '7 Westbourne Terrace',
        postCode: 'W2 3UL',
        city: 'London',
        country: 'U.K.',
      },
      airbnbId: 3512500,
      numberOfBedrooms: 1,
      numberOfBathrooms: 1,
      incomeGenerated: 2000.34,
    };

    defaultProps = {
      item,
    };
  });

  it('should render without errors', () => {
    wrap = shallow(<Row {...defaultProps} />);

    expect(wrap).toHaveLength(1);
  });

  it('should render proper name', () => {
    wrap = shallow(<Row {...defaultProps} />);

    expect(wrap.find('.name')).toHaveLength(1);
    expect(wrap.find('.name').text()).toBe('carlos');
  });
});
