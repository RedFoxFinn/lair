
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import {Provider} from 'react-redux';
import state from '../../../controllers/redux/state';
import About from './about';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

// imports for redux => modify beforeEach => modify tests

const newId = uuid;
const singleContent = {
    type: 'single',
    text: ['ts1-' + newId, 'ts2-' + newId]
};
const doubleContent = {
    type: 'double',
    first: ['td1-' + newId, 'td2' + newId],
    second: ['td3-' + newId, 'td4-' + newId]
};
const tripleContent = {
    type: 'triple',
    first: ['t1-' + newId, 't2-' + newId],
    second: ['t3-' + newId, 't4-' + newId],
    third: ['t5-' + newId, 't6-' + newId]
};

describe('About unit tests - single row', () => {
    let dummy = false;
    let component;
    
    beforeEach(() => component = render(<Provider store={state}><About id={newId} ignoreContent={false} content={singleContent}/></Provider>));

    test('dummy test', () => {
        expect(dummy).toBe(false);
        dummy = true;
        expect(dummy).toBe(true);
    });
    test('about renders', () => {
        const about = screen.queryAllByTestId(`${newId}`);
        expect(about).toBeTruthy();
        isCompositeComponentWithType(about, About);
    });
    test('about gets correct id', () => {
        const about = screen.queryAllByTestId(`${newId}`);
        expect(about.id).toBe(newId);
    });
    test('about gets correct content', () => {
        const about = screen.queryAllByTestId(`${newId}`);
        expect(about.textContent).toContain(`${singleContent.text[0]}`);
        expect(about.textContent).toContain(`${singleContent.text[1]}`);
    });
});