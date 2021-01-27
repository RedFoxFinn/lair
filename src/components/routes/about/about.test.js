
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import {Provider} from 'react-redux';
import state from '../../../controllers/redux/state';
import About from './about';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

// imports for redux => modify beforeEach => modify tests

let newId = uuid;

const characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

const getContent = (type, length) => {
    switch (type) {
        case 'single': return {type: 'single', first: getString(length), second: getString(length)};
        case 'double':
        case 'triple':
        default: return null;
    }
};

const getString = (length) => {
    let string = '';
    for (let i = 0; i < length; i++) {
        const character = characters[Math.floor(Math.random()*characters.length)];
        string = `${string}${character}`;
    }
    return string;
};

describe('About unit tests - single row', () => {
    let dummy = false;
    let component;
    const content = getContent('single',6);

    beforeEach(() => component = render(<Provider store={state}><About id={newId} ignoreContent={false} content={content}/></Provider>));

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
        expect(about.textContent).toBe(content.first);
        expect(about.textContent).toBe(content.second);
    });
});