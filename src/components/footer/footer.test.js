import React from 'react';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';

import state from '../../controllers/redux/state';
import Footer from './footer';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

const newId = uuid;
const singleContent = {
    type: 'single',
    text: 'ts' + newId
};
const doubleContent = {
    type: 'double',
    first: 't1-' + newId,
    second: 't2-' + newId
};
const tripleContent = {
    type: 'triple',
    first: 't1-' + newId,
    second: 't2-' + newId,
    third: 't3-' + newId
};

describe('footer pane unit tests - content type triple', () => {
    let variable = false;
    let component;

    beforeEach(() => component = render(<Provider store={state}><Footer id={newId} content={tripleContent}/></Provider>));

    test('dummy test', () => {
        expect(variable).toBe(false);
        variable = true;
        expect(variable).toBe(true);
    });
    test('footer renders', () => {
        const footer = screen.queryByTestId(`${newId}`);
        expect(footer).toBeTruthy();
        isCompositeComponentWithType(footer, Footer);
    });
    test('footer gets correct id', () => {
        const footer = screen.queryByTestId(`${newId}`);
        expect(footer.id).toBe(`${newId}`);
    });
    test('footer gets correct content', () => {
        const footer = screen.queryByTestId(`${newId}`);
        expect(footer.textContent).toContain(`${tripleContent.first}`);
        expect(footer.textContent).toContain(`${tripleContent.second}`);
        expect(footer.textContent).toContain(`${tripleContent.third}`);
    });
});

describe('footer pane unit tests - content type double', () => {
    let variable = false;
    let component;

    beforeEach(() => component = render(<Provider store={state}><Footer id={newId} content={doubleContent}/></Provider>));

    test('dummy test', () => {
        expect(variable).toBe(false);
        variable = true;
        expect(variable).toBe(true);
    });
    test('footer renders', () => {
        const footer = screen.queryByTestId(`${newId}`);
        expect(footer).toBeTruthy();
        isCompositeComponentWithType(footer, Footer);
    });
    test('footer gets correct id', () => {
        const footer = screen.queryByTestId(`${newId}`);
        expect(footer.id).toBe(`${newId}`);
    });
    test('footer gets correct content', () => {
        const footer = screen.queryByTestId(`${newId}`);
        expect(footer.textContent).toContain(`${doubleContent.first}`);
        expect(footer.textContent).toContain(`${doubleContent.second}`);
    });
});

describe('footer pane unit tests - content type single', () => {
    let variable = false;
    let component;

    beforeEach(() => component = render(<Provider store={state}><Footer id={newId} content={singleContent}/></Provider>));

    test('dummy test', () => {
        expect(variable).toBe(false);
        variable = true;
        expect(variable).toBe(true);
    });
    test('footer renders', () => {
        const footer = screen.queryByTestId(`${newId}`);
        expect(footer).toBeTruthy();
        isCompositeComponentWithType(footer, Footer);
    });
    test('footer gets correct id', () => {
        const footer = screen.queryByTestId(`${newId}`);
        expect(footer.id).toBe(`${newId}`);
    });
    test('footer gets correct content', () => {
        const footer = screen.queryByTestId(`${newId}`);
        expect(footer.textContent).toContain(`${singleContent.text}`);
    });
});