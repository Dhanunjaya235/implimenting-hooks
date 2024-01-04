import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserefHook from './userefHook';

describe('<UserefHook />', () => {
  test('it should mount', () => {
    render(<UserefHook />);
    
    const userefHook = screen.getByTestId('UserefHook');

    expect(userefHook).toBeInTheDocument();
  });
});