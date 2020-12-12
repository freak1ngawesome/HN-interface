import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import store from '../../store';

describe('Header tests',() => {
  const header = renderer.create(<Header store={store}/>);

  // так как компонент построяяно меняет значение таймера, то я решил просто проверить что он имеет нужную структуру: один заголовок и один таймер, в целом, то же что и снепшот.

  it('Component has only one timer',() => {
    expect(header.root.findAllByProps({id: 'timer'}).length).toBe(1);
  });
  it('Component has only one h1',() => {
    expect(header.root.findAllByProps({id: 'header'}).length).toBe(1);
  });

});