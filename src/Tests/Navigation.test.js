import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

describe('Testing the Navigation', () => {
  it('Navigation is rendered', () => {
    const nav = renderer
      .create(<BrowserRouter><Navigation /></BrowserRouter>)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });
});
