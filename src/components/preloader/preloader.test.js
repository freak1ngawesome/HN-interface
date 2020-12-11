import React from 'react';
import Preloader from './preloader';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import store from '../../store';

describe('Header tests',() => {
  const preload = renderer.create(<Preloader store={store}/>);

  it('dad',() => {
    expect(preload.toJSON()).toMatchSnapshot()
  })

});