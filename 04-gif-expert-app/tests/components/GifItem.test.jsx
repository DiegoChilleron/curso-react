import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {

    const title = 'Snake';
    const url = 'https://metalgearsolid.com/snake.jpg';

    test('debe de hacer match con el snapshot', () => {
       const {container = render(<GifItem title='' url='' />);
        expect(container).toMatchSnapshot();
    });
});