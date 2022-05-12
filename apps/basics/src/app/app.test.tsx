import { render } from '@testing-library/react';

import App from '../app';

describe('Basics Test', () => {
    test('test', () => {
        const { baseElement } = render(<App />)
        return undefined
    })
});
