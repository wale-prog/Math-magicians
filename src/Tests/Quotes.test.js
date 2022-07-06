import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

describe('Testing the Quote component', () => {
  it('Quotes is rendered', () => {
    const calc = renderer
      .create(<Quotes />)
      .toJSON();
    expect(calc).toMatchSnapshot();
  });
});
