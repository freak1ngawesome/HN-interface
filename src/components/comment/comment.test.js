import React from 'react';
import Comment from './comment';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Comment tests',() => {
  let comment = renderer.create(<Comment root={false}/>);

  it('if root - false, there is no div with id = "root"',() => {
    expect(comment.root.findAllByProps({id: 'root'}).length).toBe(0);
  });

  let com = shallow(<Comment root={false}/>);
  it('if root - false, there is no div with class = "comment__btn"',() => {
    const btn = com.find('.comment__btn');
    expect(btn).toHaveLength(0);
  });

});