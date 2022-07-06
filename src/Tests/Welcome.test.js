import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from '../components/Welcome';

describe('Testing the Welcome', () => {
  it('Welcome is rendered', () => {
    const welcome = renderer
      .create(<Welcome />)
      .toJSON();
    expect(welcome).toMatchSnapshot();
  });
});
