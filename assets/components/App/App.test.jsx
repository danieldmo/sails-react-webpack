import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from 'App/App';
import React from 'React';

describe('<App />', () => {

  // simple render
  it('should render <App />', () => {
    var wrapper = shallow(<App />);
    expect(wrapper.find('.app'))
      .to.exist.and.have.length(1);
  });

});