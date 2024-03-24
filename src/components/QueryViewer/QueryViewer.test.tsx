import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QueryViewer from './QueryViewer';
import { Query } from '../../domains/query';
import { QueryInterface } from '../../interfaces/query.interface';

describe('<QueryViewer />', () => {
  test('it should mount', () => {
    const queryData: QueryInterface = {
      amount: '',
      fromDate: '',
      toDate: '',
      colorQuery: '',
      fromProfiles: [],
      labelForThisQuery: '',
      visibilityQuery: true,
      returnFields: [],
      queryParameters: []
    };
    const query = new Query(queryData);
    render(<QueryViewer query={query} />);
    
    const queryViewer = screen.getByTestId('QueryViewer');

    expect(queryViewer).toBeInTheDocument();
  });
});