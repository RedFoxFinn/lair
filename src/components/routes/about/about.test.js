
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';
import About from './about';

describe('About unit tests', () => {
    const newId = uuid;
    let dummy = false;
    let about;
    beforeAll(() => about = render(<About id={newId}/>));
    test('dummy test', () => {
        expect(dummy).toBe(false);
        dummy = true;
        expect(dummy).toBe(true);
    });
    test('about renders', () => {
        expect(about).toBeTruthy();
    });
    test('about gets correct id', () => {
        expect(about.id).toBe(newId);
    });
});