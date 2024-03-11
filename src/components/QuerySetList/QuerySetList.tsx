import React, { FC, useEffect, useState } from 'react';
import './QuerySetList.scss';
import Accordion from 'react-bootstrap/esm/Accordion';
import { QuerySet } from '../../interfaces/querySet.interface';
import { Query } from '../../interfaces/query.interface';
import Button from 'react-bootstrap/esm/Button';

interface QuerySetListProps {
  querySetList: QuerySet[],
  onQuerySelected: (selectedQuery: Query) => void;
}

const QuerySetList: FC<QuerySetListProps> = ({ querySetList, onQuerySelected }) => {
  const [querySets, setQuerySets] = useState<QuerySet[]>([]);

  useEffect(() => {
    console.log(`useEffect querySetList: ${querySetList}`);
    if(querySetList && querySetList.length > 0){
      setQuerySets(querySetList);
    }
  }, [onQuerySelected, querySetList]);

  const selectQuery = (query: Query) => {
    console.log(`Selected query: ${query.labelForThisQuery}`);

    onQuerySelected(query);
  }

  const duplicateQuery = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, query: Query) => {
    event.stopPropagation();
    console.log(`Duplicated query: ${query.labelForThisQuery}`);
  }

  const deleteQuery = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, query: Query) => {
    event.stopPropagation();
    console.log(`Deleted query: ${query.labelForThisQuery}`);
  }

  const deleteQuerySet = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, query: QuerySet) => {
    event.stopPropagation();
    console.log(`Deleted querySet: ${query.name}`);
  }

  return (
    <div className="QuerySetList" data-testid="QuerySetList">
      {
        // todo: add loader
        querySets.length > 0 ? querySetList.map((querySet, index) =>
        // <Accordion key={index} onClick={() => selectAccordion(querySet)} flush>
        <Accordion key={index} flush>
        <Accordion.Item eventKey="0">
        <Accordion.Header>
          {querySet.name}
          <div className="queryIcon" onClick={(evt) => deleteQuerySet(evt, querySet)}>del</div>
        </Accordion.Header>
        <Accordion.Body className="accordion-body--no-padding">

        {
          querySet.queries.map((query, index)=>
          <div className="query" key={index} style={{ backgroundColor: query.colorQuery }}>
            <div className="queryContent" onClick={() => selectQuery(query)}>
              <div className='queryContentTitle'>
                <p>{query.labelForThisQuery}</p>
              </div>
              <div className='queryContentIcons'>
                {/* <div className="queryIcon">duplicate-icon</div>
                <div className="queryIcon">bin-icon</div> */}
                <div className="queryIcon" onClick={(evt) => duplicateQuery(evt, query)}>dup</div>
                <div className="queryIcon" onClick={(evt) => deleteQuery(evt, query)}>del</div>
              </div>
            </div>
          </div>
          )
        }
        <div className="query-add d-grid gap-2">
          <Button variant="primary" size="lg">Add new query</Button>
        </div>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        
        )
        : "...Loading"
        // Key is needed for react to identify which element has been changed.
      }
        <div className="querySet-add d-grid gap-2">
          <Button variant="primary" size="lg">Add new querySet</Button>
        </div>
    </div>
  )
};

export default QuerySetList;
