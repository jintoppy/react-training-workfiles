import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

var Employees = require('../app/components/Employees');

describe('<Employees />', function(){
	it('should have table', function(){
		const wrapper = shallow(<Employees/>);
		expect(wrapper.find('table')).to.have.length(1);
	});

});