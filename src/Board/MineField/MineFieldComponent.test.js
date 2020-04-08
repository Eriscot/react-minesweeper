import React from 'react';
import { shallow } from 'enzyme';
import MineFieldComponent from './MineFieldComponent';

describe('MineField testing', () => {
    const wrapper = shallow(<MineFieldComponent />);
    it('renders minefield', () => {
        expect(wrapper.find('#MineField')).toHaveLength(1);
    });

    it('renders 10 line breaks', () => {
        expect(wrapper.find('.break')).toHaveLength(10);
    })
});