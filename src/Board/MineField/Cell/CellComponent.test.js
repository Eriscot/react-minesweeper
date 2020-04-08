import React from 'react';
import { shallow } from 'enzyme';
import CellComponent from './CellComponent';
import { C } from './imgCompute';

describe('CellComponent testing', () => {
    it('renders right value', () => {
        const wrapper = shallow(<CellComponent value={C.tileMine}/>);

        expect(wrapper.find('img').prop('src')).toEqual(C.tileMine);
    });

});
