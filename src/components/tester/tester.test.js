import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react';
import uuid from 'uuid';
import {Provider} from 'react-redux';

import state from '../../controllers/redux/state';
import Tester from './tester';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

describe('tester component unit tests', () => {
    let variable = false;
    const newId = uuid;
    let tester;

    test('dummy test', () => {
        expect(variable).toBe(false);
        variable = true;
        expect(variable).toBe(true);
    });
    test('tester renders', () => {
        tester = render(<Provider store={state}><Tester id={newId}/></Provider>);
        expect(tester).toBeTruthy();
        isCompositeComponentWithType(tester, Tester);
    });
    test('tester gets correct id', () => {
        tester = render(<Provider store={state}><Tester id={newId}/></Provider>);
        expect(tester.id).toBe(newId);
    });
    test('tester increment works', () => {
        tester = render(<Provider store={state}><Tester id={newId}/></Provider>);
        expect(screen.queryByTestId(`${newId}-testerValue`)).toBeTruthy();
        expect(screen.queryByTestId(`${newId}-testerValue`).textContent).toContain('Value: 0');
        const incrementor = screen.queryByTestId(`${newId}-increment`);
        expect(incrementor).toBeTruthy();
        fireEvent.click(incrementor);
        expect(screen.queryByTestId(`${newId}-testerValue`)).toHaveTextContent('Value: 1');
    });
    test('tester decrement works', () => {
        tester = render(<Provider store={state}><Tester id={newId}/></Provider>);
        expect(screen.queryByTestId(`${newId}-testerValue`)).toHaveTextContent('Value: 1');
        const decrementor = screen.queryByTestId(`${newId}-decrement`);
        expect(decrementor).toBeTruthy();
        fireEvent.click(decrementor);
        fireEvent.click(decrementor);
        expect(screen.queryByTestId(`${newId}-testerValue`)).toHaveTextContent('Value: -1');
    });
    test('tester zeroing works', () => {
        tester = render(<Provider store={state}><Tester id={newId}/></Provider>);
        expect(screen.queryByTestId(`${newId}-testerValue`)).toHaveTextContent('Value: -1');
        const decrementor = screen.queryByTestId(`${newId}-decrement`);
        expect(decrementor).toBeTruthy();
        fireEvent.click(decrementor);
        expect(screen.queryByTestId(`${newId}-testerValue`)).toHaveTextContent('Value: -2');
        const zeroing = screen.queryByTestId(`${newId}-zero`);
        expect(zeroing).toBeTruthy();
        fireEvent.click(zeroing);
        expect(screen.queryByTestId(`${newId}-testerValue`)).toHaveTextContent('Value: 0');
    });
});