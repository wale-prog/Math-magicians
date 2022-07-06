import React from 'react';
import Calculator from '../components/Calculator';
import renderer from 'react-test-renderer'

describe('Testing the calculator', () => {
    it('Calculator is rendered', () => {
      const calc = renderer
        .create(<Calculator />)
        .toJSON();
      expect(calc).toMatchSnapshot();
    });
  });