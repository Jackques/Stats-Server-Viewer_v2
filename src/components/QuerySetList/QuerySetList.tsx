import React, { FC, useEffect, useState } from 'react';
import './QuerySetList.scss';
import Accordion from 'react-bootstrap/esm/Accordion';
import Button from 'react-bootstrap/esm/Button';
import { QuerySet } from '../../domains/querySet';
import { Query } from '../../domains/query';

interface QuerySetListProps {
  querySetList: QuerySet[],
  onQuerySelected: (selectedQuery: Query) => void;
}

const QuerySetList: FC<QuerySetListProps> = ({ querySetList, onQuerySelected }) => {
  const [querySets, setQuerySets] = useState<QuerySet[]>([]);

  useEffect(() => {
    console.log(`useEffect querySetList: ${querySetList.length}`);
    // if(querySetList && querySetList.length > 0){
      setQuerySets(querySetList);
    // }
  }, [onQuerySelected, querySetList]);

  const selectQuery = (query: Query) => {
    console.log(`Selected query: ${query.getQueryLabel()}`);

    onQuerySelected(query);
  }

  const duplicateQuery = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, query: Query) => {
    event.stopPropagation();
    console.log(`Duplicated query: ${query.getQueryLabel()}`);
  }

  const deleteQuery = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, query: Query) => {
    event.stopPropagation();
    console.log(`Deleted query: ${query.getQueryLabel()}`);
  }

  const deleteQuerySet = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, querySet: QuerySet) => {
    event.stopPropagation();
    console.log(`Deleted querySet: ${querySet.getQuerySetName()}`);
  }

  const addNewQueryInQuerySet = (querySet: QuerySet) => {
    console.log(`Pressed add new query in querySet: ${querySet.getQuerySetName()}`);
  }

  const addNewQuerySet = () => {
    console.log(`Pressed add new querySet`);
  }

  return (
    <div className="QuerySetList" data-testid="QuerySetList">
      {
        // todo: add loader
        querySets.length > 0 ? querySetList.map((querySet: QuerySet, index) =>
        <Accordion key={index} flush>
          <Accordion.Item eventKey="0">
          <Accordion.Header>
            {querySet.getQuerySet().name}
            <div className="queryIcon" onClick={(evt) => deleteQuerySet(evt, querySet)}>del</div>
          </Accordion.Header>
          <Accordion.Body className="accordion-body--no-padding">
            {
              querySet.getQueries().length > 0 ? querySet.getQueries().map((query: Query, index)=>
              <div className="query" key={index} style={{ backgroundColor: query.getQueryColor() }}>
                <div className="queryContent" onClick={() => selectQuery(query)}>
                  <div className='queryContentTitle'>
                    <p>{query.getQueryLabel()}</p>
                  </div>
                  <div className='queryContentIcons'>
                    <div className="queryIcon" onClick={(evt) => duplicateQuery(evt, query)}>dup</div>
                    <div className="queryIcon" onClick={(evt) => deleteQuery(evt, query)}>del</div>
                  </div>
                </div>
              </div>
              ) : "Loading queries.."
            }
            <div className="query-add d-grid gap-2">
              <Button variant="primary" size="lg" onClick={() => addNewQueryInQuerySet(querySet)}>Add new query</Button>
            </div>
          </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        )
        : "...Loading querySets.."
        // Key is needed for react to identify which element has been changed.
      }
        <div className="querySet-add d-grid gap-2">
          <Button variant="primary" size="lg" onClick={() => addNewQuerySet()}>Add new querySet</Button>
        </div>
    </div>
  )
};

export default QuerySetList;
