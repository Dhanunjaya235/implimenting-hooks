import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UseStateHook from './useStateHook';

describe('<UseStateHook />', () => {
  test('it should mount', () => {
    render(<UseStateHook />);
    
    const useStateHook = screen.getByTestId('UseStateHook');

    expect(useStateHook).toBeInTheDocument();
  });
});