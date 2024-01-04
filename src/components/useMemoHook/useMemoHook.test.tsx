import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UseMemoHook from './useMemoHook';

describe('<UseMemoHook />', () => {
  test('it should mount', () => {
    render(<UseMemoHook />);
    
    const useMemoHook = screen.getByTestId('UseMemoHook');

    expect(useMemoHook).toBeInTheDocument();
  });
});