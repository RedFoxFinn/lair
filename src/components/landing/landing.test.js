import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import uuid from 'uuid';
import {Provider} from 'react-redux';
import state from '../../logic/redux/state';
import Landing from './landing';

describe('landing page unit tests', () => {
    let variable = false;
    const newId = uuid;
    const newContent = uuid;
    test('dummy test', () => {
        expect(variable).toBe(false);
        variable = true;
        expect(variable).toBe(true);
    });
    test('landing gets correct id', () => {
        const landing = <Provider store={state}><Landing id={newId}/></Provider>;
        expect(landing.id).toBe(newId);
    });
    test('landing renders default content', () => {
        const component = render(<Provider store={state}><Landing id={newId}/></Provider>);
        expect(component).toBeTruthy();
        const tester = component.queryByTestId(`${newId}-tester`);
        expect(tester).toBeTruthy();
        expect(tester.textContent).toContain('Value: 0');
    });
    test('landing gets correct content', () => {
        const component = render(<Provider store={state}><Landing id={newId} content={newContent}/></Provider>);
        expect(component.content).toBe(newContent);
    });
});