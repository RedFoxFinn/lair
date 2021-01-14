import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import uuid from 'uuid';
import {Provider} from 'react-redux';

import state from '../../logic/redux/state';
import Tester from './tester';

describe('tester component unit tests', () => {
    let variable = false;
    const newId = uuid;

    test('dummy test', () => {
        expect(variable).toBe(false);
        variable = true;
        expect(variable).toBe(true);
    });
    test('tester gets correct id', () => {
        const tester = <Provider store={state}><Tester id={newId}/></Provider>;
        expect(tester.id).toBe(newId);
    });
    test('tester increment works', () => {
        const component = render(<Provider store={state}><Tester id={newId}/></Provider>);
        expect(component.queryByTestId(`${newId}-testerValue`)).toHaveTextContent('Value: 0');
        const incrementor = component.queryByTestId(`${newId}-increment`);
        expect(incrementor).toBeTruthy();
        fireEvent.click(incrementor);
        expect(component.queryByTestId(`${newId}-testerValue`)).toHaveTextContent('Value: 1');
    });
    test('tester decrement works', () => {
        const component = render(<Provider store={state}><Tester id={newId}/></Provider>);
        expect(component.queryByTestId(`${newId}-testerValue`)).toHaveTextContent('Value: 1');
        const decrementor = component.queryByTestId(`${newId}-decrement`);
        expect(decrementor).toBeTruthy();
        fireEvent.click(decrementor);
        fireEvent.click(decrementor);
        expect(component.queryByTestId(`${newId}-testerValue`)).toHaveTextContent('Value: -1');
    });
    test('tester zeroing works', () => {
        const component = render(<Provider store={state}><Tester id={newId}/></Provider>);
        expect(component.queryByTestId(`${newId}-testerValue`)).toHaveTextContent('Value: -1');
        const decrementor = component.queryByTestId(`${newId}-decrement`);
        expect(decrementor).toBeTruthy();
        fireEvent.click(decrementor);
        expect(component.queryByTestId(`${newId}-testerValue`)).toHaveTextContent('Value: -2');
        const zeroing = component.queryByTestId(`${newId}-zero`);
        expect(zeroing).toBeTruthy();
        fireEvent.click(zeroing);
        expect(component.queryByTestId(`${newId}-testerValue`)).toHaveTextContent('Value: 0');
    });
});