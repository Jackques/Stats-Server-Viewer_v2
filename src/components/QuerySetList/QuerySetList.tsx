import React, { FC } from 'react';
import './QuerySetList.scss';
import Accordion from 'react-bootstrap/esm/Accordion';

interface QuerySetListProps { }

const QuerySetList: FC<QuerySetListProps> = () => (
  <div className="QuerySetList" data-testid="QuerySetList">

<Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body className="accordion-body--no-padding">
          <div className="query" style={{backgroundColor: 'cyan'}}>
            <div className="queryContent">
                <div className='queryContentTitle'>
                  <p>Query 1</p>
                </div>
                <div className='queryContentIcons'>
                  <div>duplicate-icon</div>
                  <div>bin-icon</div>
                </div>
            </div>
          </div>
          <div className="query" style={{backgroundColor: 'pink'}}>
            <div className="queryContent">
              <p>Query 2</p>
            </div>
          </div>
          <div className="query" style={{backgroundColor: 'indigo'}}>
            <div className="queryContent">
              <p>Query 3</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  </div>
);

export default QuerySetList;
