import React, { FC, useEffect, useState } from 'react';
import './QueryViewer.scss';
import { Query } from '../../domains/query';
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Bar } from "react-chartjs-2";
import { fakerEN as faker } from '@faker-js/faker';
import { Spinner } from 'react-bootstrap';
import { SelectedQuery } from '../../domains/selectedQuery';

interface QueryViewerProps {
  selectedQuery: SelectedQuery | undefined;
}

const QueryViewer: FC<QueryViewerProps> = ({ selectedQuery }) => {
  const [selectedQueryView, setSelectedQuery] = useState<SelectedQuery>();
  const [query, setQuery] = useState<Query | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(`%c 1. set selected query: ${selectedQuery}`, `color: red`);
    if (selectedQuery) {
      setIsLoading(true);
      setSelectedQuery(selectedQuery);
      console.log(`%c 3. set selected query: ${selectedQuery}`, `color: red`);

      getSelectedQueryDetails(selectedQuery);
    }
  }, [selectedQuery]);

  useEffect(() => {
    console.log(`%c 2. set selected query: ${selectedQuery}`, `color: red`);
    console.dir(selectedQuery);

    console.log(`%c GRAPH DATA`, `color: purple`);
    console.dir(selectedQuery?.getGraphData());
  }, [selectedQuery]);

  async function getSelectedQueryDetails(selectedQuery: SelectedQuery): Promise<void> {
    const querySet = selectedQuery.getQuerySet();
    const query = selectedQuery.getQuery();
    if(query){

      //TODO: Shouldn't i move the part below to QuerySetList component? That is WHERE I expect the queries to be loaded.. how else would I be able to click on them if they're not loaded?
      // also; it is NOT the responsibility of this viewing component to get the query!
      await query.getQueryDetailsIsLoaded().then((isSuccess: boolean) => {
        setIsLoading(false);
        console.log(`isLoading: `, isLoading);

        setQuery(query);
  
        //todo: what if request was unsuccefull? isSuccess = false???
      });
    }
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      }
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  if (query) {

    if (isLoading) {
      return (
        <div>
          <Spinner animation="border" variant="primary" />
        </div>
      );
    } else {
      return (
        <div>
          <div className="QueryViewer" data-testid="QueryViewer">
            <h2>{query?.getQueryLabel() ? query?.getQueryLabel() : 'Unavailable query name'}</h2>
            <p>{query?.getQueryColor() ? query?.getQueryColor() : 'No color set'}</p>
            <pre>
              <span>{query?.getQueryFromDate() ? query.getQueryFromDate() : ' - '}</span>
              <span>-</span>
              <span>{query?.getQueryToDate() ? query.getQueryToDate() : ' - '}</span>
            </pre>
            <div style={{ margin: "20px" }}>
              <Bar options={options} data={data} />
            </div>
          </div>

        </div>
      );
    }
  } else {
    return (
      <div>
        <p>No query selected</p>
      </div>
    )
  }
};

export default QueryViewer;
