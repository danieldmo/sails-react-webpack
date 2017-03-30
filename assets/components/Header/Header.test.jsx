import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from 'Header/Header';
import React from 'React';

describe('<Header />', () => {

  // simple render
  it('should render <Header />', () => {
    var wrapper = shallow(<Header />);
    expect(wrapper.find('header'))
      .to.exist.and.have.length(1);
  });

});