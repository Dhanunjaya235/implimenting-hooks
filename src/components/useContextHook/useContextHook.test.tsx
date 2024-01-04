import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UseContextHook from './useContextHook';

describe('<UseContextHook />', () => {
  test('it should mount', () => {
    render(<UseContextHook />);
    
    const useContextHook = screen.getByTestId('UseContextHook');

    expect(useContextHook).toBeInTheDocument();
  });
});