import React, { FC, useEffect, useState } from 'react';
import './QueryViewer.scss';
import { Query } from '../../domains/query';

interface QueryViewerProps {
  query: Query | undefined;
}

const QueryViewer: FC<QueryViewerProps> = ({ query }) => {
  const [selectedQuery, setSelectedQuery] = useState<Query>();

  useEffect(() => {
    setSelectedQuery(query);
  });

  if (query) {
    return (
      <div>
        <div className="QueryViewer" data-testid="QueryViewer">
          <h2>{selectedQuery?.getQueryLabel() ? selectedQuery?.getQueryLabel() : 'Unavailable query name'}</h2>
          QueryViewer Component
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>No query selected</p>
      </div>
    )
  }
};

export default QueryViewer;
