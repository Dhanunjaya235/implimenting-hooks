import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {UseReducerHook} from './useReducerHook';

describe('<UseReducerHook />', () => {
  test('it should mount', () => {
    render(<UseReducerHook />);
    
    const useReducerHook = screen.getByTestId('UseReducerHook');

    expect(useReducerHook).toBeInTheDocument();
  });
});