import React from 'react';
import { shallow } from 'enzyme';
import CounterComponent from './CounterComponent';
import imgCompute from './imgCompute';

describe('CounterComponent testing', () => {
    it('renders 194 as value', () => {
        let value = 194;
        const wrapper = shallow(<CounterComponent value={value}/>);
        wrapper.find('img').forEach((element, index) => {
            expect(element.prop('src')).toEqual(imgCompute(+value.toString().split('')[index]));
        });
    });
})