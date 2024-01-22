import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Topbar from './topbar';

describe('<Topbar />', () => {
  test('it should mount', () => {
    render(<Topbar projectsList={["project1", "project2"]} onItemSelected={()=>{}}/>);
    
    const topbar = screen.getByTestId('Topbar');

    expect(topbar).toBeInTheDocument();
  });
});