import { expect } from 'chai';
import { shallow } from 'enzyme';
import TextArea from './App.jsx';
import React from 'React';

describe('<App />', () => {

  var wrapper;

  // simple render
  it('should render <App />', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('.app'))
      .to.exist.and.have.length(1);
  });

});