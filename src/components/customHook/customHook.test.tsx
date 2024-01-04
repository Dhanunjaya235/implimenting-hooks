import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomHook from './customHook';

describe('<CustomHook />', () => {
  test('it should mount', () => {
    render(<CustomHook />);
    
    const customHook = screen.getByTestId('CustomHook');

    expect(customHook).toBeInTheDocument();
  });
});