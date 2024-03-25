import React, { FC, useEffect, useState } from 'react';
import './QueryViewer.scss';
import { Query } from '../../domains/query';
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Bar } from "react-chartjs-2";
import { fakerEN as faker } from '@faker-js/faker';

interface QueryViewerProps {
  query: Query | undefined;
}

const QueryViewer: FC<QueryViewerProps> = ({ query }) => {
  const [selectedQuery, setSelectedQuery] = useState<Query>();

  // setSelectedQuery(query);

  useEffect(() => {
    if (query) {
      console.log(`QUERYVIEWER - query`);
      setSelectedQuery(query);

      // const fetchData = async () => {
      //   console.log(`testdata`);
      //   const result = await selectedQuery?.getQueryDetailsIsLoaded().then((isSuccess: boolean)=>{
      //     console.log(`SelectedQuery succesfully loaded details: ${isSuccess}`);
      //   });
   
      //   // setData(result.data);
        
      // };
      // fetchData();
      getSelectedQueryDetails(query);
    }
  }, [query]);

  useEffect(() => {
    console.log(` QUERYVIEWER - set selected query`);

    console.log(`MY SELECTED QUERY IS:`);
    console.dir(selectedQuery);
    // if(selectedQuery){
    //   console.log(`QUERYVIEWER - setSelectedQuery`);
    //   getSelectedQueryDetails();
    // }
  }, [selectedQuery]);

  async function getSelectedQueryDetails(query: Query): Promise<void> {
    console.log(`async getSelectedQueryDetails called`);
    await query.getQueryDetailsIsLoaded().then((isSuccess: boolean)=>{
      console.log(`SelectedQuery succesfully loaded details: ${isSuccess}`);
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
  } else {
    return (
      <div>
        <p>No query selected</p>
      </div>
    )
  }
};

export default QueryViewer;
