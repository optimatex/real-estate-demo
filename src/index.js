import React from 'react';
import { render } from 'react-dom';
import DevTools from 'mobx-react-devtools';

import PropertiesStore from './property/stores/PropertiesStore';
import Properties from './property/components/Properties';

const store = new PropertiesStore();

render(
  <div>
    <DevTools />
    <Properties store={store} />
  </div>,
  document.getElementById('root'),
);
