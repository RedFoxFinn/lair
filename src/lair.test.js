import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import {Provider} from 'react-redux';

import Lair from './lair';
import state from './logic/redux/state';

describe('lair ui preliminary integration tests', () => {
    let variable = false;
    const newId = uuid;
    let lair;

    beforeEach(() => lair = render(<Provider store={state}><Lair id={newId}/></Provider>));
    test('dummy test', () => {
        expect(variable).toBe(false);
        variable = true;
        expect(variable).toBe(true);
    });
    test('lair gets correct id', () => {
        expect(lair.id).toBe(newId);
    });
    test('lair: default header renders', () => {
        const header = screen.queryByTestId(`${newId}-lair-header-default`);
        expect(header).toBeTruthy();
        expect(header.textContent).toContain('Lair');
        expect(header.textContent).toContain('Header pane');
    });
    test('lair: default footer renders', () => {
        const footer = screen.queryByTestId(`${newId}-lair-footer-default`);
        expect(footer).toBeTruthy();
        expect(footer.textContent).toContain('Lair');
        expect(footer.textContent).toContain('Footer pane');
    });
    test('lair: default landing renders', () => {
        const landing = screen.queryByTestId(`${newId}-lair-landing`);
        expect(landing).toBeTruthy();
        expect(landing.textContent).toContain('Value: 0');
    });
});