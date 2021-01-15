import React from 'react';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import uuid from 'uuid';

import state from '../../controllers/redux/state';
import Header from './header';

describe('header pane unit tests', () => {
    let variable = false;
    const newId = uuid;
    const newContent = uuid;
    test('dummy test', () => {
        expect(variable).toBe(false);
        variable = true;
        expect(variable).toBe(true);
    });
    test('header gets correct id', () => {
        const header = <Header id={newId}/>;
        expect(header.id).toBe(newId);
    });
    test('header gets correct text content', () => {
        const component = render(<Provider store={state}><Header id={newId} content={newContent}/></Provider>);
        expect(component.content).toBe(newContent);
    });
});