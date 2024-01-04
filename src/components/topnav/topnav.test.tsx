import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Topnav from './topnav';

describe('<Topnav />', () => {
  test('it should mount', () => {
    render(<Topnav />);
    
    const topnav = screen.getByTestId('Topnav');

    expect(topnav).toBeInTheDocument();
  });
});