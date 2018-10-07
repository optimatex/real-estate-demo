import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './';

describe('Spinner', () => {
  let wrap;

  it('should render without errors', () => {
    wrap = shallow(<Spinner />);

    expect(wrap).toHaveLength(1);
  });
});
