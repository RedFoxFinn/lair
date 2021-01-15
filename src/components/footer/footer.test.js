import React from 'react';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';

import state from '../../controllers/redux/state';
import Footer from './footer';

describe('footer pane unit tests', () => {
    let variable = false;
    const newId = uuid;
    const newContent = uuid;
    test('dummy test', () => {
        expect(variable).toBe(false);
        variable = true;
        expect(variable).toBe(true);
    });
    test('footer gets correct id', () => {
        const footer = <Footer id={newId}/>;
        expect(footer.id).toBe(newId);
    });
    test('footer gets correct content', () => {
        const component = render(<Provider store={state}><Footer id={newId} content={newContent}/></Provider>);
        expect(component.content).toBe(newContent);
    });
});