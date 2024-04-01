import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QueryViewer from './QueryViewer';
import { Query } from '../../domains/query';
import { QueryInterface } from '../../interfaces/query.interface';
import { SelectedQuery } from '../../domains/selectedQuery';
import { QuerySet } from '../../domains/querySet';

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
    
    const query = new Query('T-Helper', 'querySetId123', queryData);
    // const querySet = new QuerySet('T-Helper', );
    // const selectedQuery: SelectedQuery = new SelectedQuery();
    render(<QueryViewer selectedQuery={undefined}/>);
    
    const queryViewer = screen.getByTestId('QueryViewer');

    expect(queryViewer).toBeInTheDocument();
  });
});