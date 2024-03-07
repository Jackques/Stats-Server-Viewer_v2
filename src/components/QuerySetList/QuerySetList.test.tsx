import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuerySetList from './QuerySetList';

describe('<QuerySetList />', () => {
  test('it should mount', () => {
    render(<QuerySetList />);
    
    const querySetList = screen.getByTestId('QuerySetList');

    expect(querySetList).toBeInTheDocument();
  });
});