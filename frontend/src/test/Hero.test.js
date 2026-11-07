import React from 'react';

import{render,screen} from '@testing-library/react';
import Hero from '../landing_page/home/Hero';
import '@testing-library/jest-dom';

describe('Hero component', () => {
    test('renders the Hero component correctly', () => {
        render(<Hero/>);
        const heroImage  = screen.getByAltText('Home Hero');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'Media/images/homeHero.png');
    });

});   
