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

  it('should render proper adress', () => {
    wrap = shallow(<Row {...defaultProps} />);

    expect(wrap.find('[data-test="line-one"]')).toHaveLength(1);
    expect(wrap.find('[data-test="line-one"]').text()).toBe('Flat 5');

    expect(wrap.find('[data-test="line-four"]')).toHaveLength(1);
    expect(wrap.find('[data-test="line-four"]').text()).toBe(
      '7 Westbourne Terrace',
    );

    expect(wrap.find('[data-test="post"]')).toHaveLength(1);
    expect(wrap.find('[data-test="post"]').text()).toBe('W2 3UL');

    expect(wrap.find('[data-test="city"]')).toHaveLength(1);
    expect(wrap.find('[data-test="city"]').text()).toBe('London');

    expect(wrap.find('[data-test="country"]')).toHaveLength(1);
    expect(wrap.find('[data-test="country"]').text()).toBe('U.K.');
  });

  it('should render proper income', () => {
    wrap = shallow(<Row {...defaultProps} />);

    expect(wrap.find('[data-test="income"]')).toHaveLength(1);
    expect(wrap.find('[data-test="income"]').text()).toBe('2000.34 £');
  });

  it('should render proper service status if possition is out of service', () => {
    wrap = shallow(<Row {...defaultProps} />);

    expect(wrap.find('.out')).toHaveLength(1);
    expect(wrap.find('.in')).toHaveLength(0);
  });

  it('should render proper service status  if possition is inside toHaveLength service', () => {
    const newProps = {
      ...item,
      canService: true,
    };
    wrap = shallow(<Row item={newProps} />);

    expect(wrap.find('.in')).toHaveLength(1);
    expect(wrap.find('.out')).toHaveLength(0);
  });
});
