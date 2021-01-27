import React from 'react';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';

import state from '../../controllers/redux/state';
import Header from './header';
import { isCompositeComponent, isCompositeComponentWithType } from 'react-dom/test-utils';

const newId = uuid;
const singleContent = {
    type: 'single',
    first: 'ts' + newId
};
const doubleContent = {
    type: 'double',
    first: 't1-' + newId,
    second: 't2-' + newId
};

describe('header pane unit tests - content type double', () => {
    let variable = false;
    let component;

    beforeEach(() => component = render(<Provider store={state}><Header id={newId} content={doubleContent}/></Provider>));

    test('dummy test', () => {
        expect(variable).toBe(false);
        variable = true;
        expect(variable).toBe(true);
    });
    test('header renders', () => {
        const header = screen.queryByTestId(`${newId}`);
        expect(header).toBeTruthy();
        isCompositeComponentWithType(header, Header);
    });
    test('header gets correct id', () => {
        const header = screen.queryByTestId(`${newId}`);
        expect(header.id).toBe(`${newId}`);
    });
    test('header gets correct text content', () => {
        const header = screen.queryByTestId(`${newId}`);
        expect(header.textContent).toContain(`${doubleContent.first}`);
        expect(header.textContent).toContain(`${doubleContent.second}`);
    });
});

describe('header pane unit tests - content type single', () => {
    let variable = false;
    let component;

    beforeEach(() => component = render(<Provider store={state}><Header id={newId} content={singleContent}/></Provider>));

    test('dummy test', () => {
        expect(variable).toBe(false);
        variable = true;
        expect(variable).toBe(true);
    });
    test('header renders', () => {
        const header = screen.queryByTestId(`${newId}`);
        expect(header).toBeTruthy();
        isCompositeComponentWithType(header, Header);
    });
    test('header gets correct id', () => {
        const header = screen.queryByTestId(`${newId}`);
        expect(header.id).toBe(`${newId}`);
    });
    test('header gets correct text content', () => {
        const header = screen.queryByTestId(`${newId}`);
        expect(header.textContent).toContain(`${singleContent.first}`);
    });
});