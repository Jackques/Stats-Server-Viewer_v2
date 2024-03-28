import React, { FC, useEffect, useState } from 'react';
import './QueryViewer.scss';
import { Query } from '../../domains/query';
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Bar } from "react-chartjs-2";
import { fakerEN as faker } from '@faker-js/faker';
import { Spinner } from 'react-bootstrap';

interface QueryViewerProps {
  query: Query | undefined;
}

const QueryViewer: FC<QueryViewerProps> = ({ query }) => {
  const [selectedQuery, setSelectedQuery] = useState<Query>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // setSelectedQuery(query);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      setSelectedQuery(query);
      getSelectedQueryDetails(query);
    }
  }, [query]);

  useEffect(() => {
  }, [selectedQuery]);

  async function getSelectedQueryDetails(query: Query): Promise<void> {
    await query.getQueryDetailsIsLoaded().then((isSuccess: boolean) => {
      setIsLoading(false);
      console.log(isLoading);

      //todo: what if request was unsuccefull? isSuccess = false???
    });
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
            <h2>{selectedQuery?.getQueryLabel() ? selectedQuery?.getQueryLabel() : 'Unavailable query name'}</h2>
            <p>{selectedQuery?.getQueryColor() ? selectedQuery?.getQueryColor() : 'No color set'}</p>
            <pre>
              <span>{selectedQuery?.getQueryFromDate() ? selectedQuery.getQueryFromDate() : ' - '}</span>
              <span>-</span>
              <span>{selectedQuery?.getQueryToDate() ? selectedQuery.getQueryToDate() : ' - '}</span>
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
