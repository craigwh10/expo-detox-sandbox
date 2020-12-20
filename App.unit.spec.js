import App from './App';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Rendering app', () => {
    
    it('Renders app component', () => {
        const tree = renderer.create(
            <App />
        ).toJSON();
        expect(tree.children.length).toBe(3);
    })

})