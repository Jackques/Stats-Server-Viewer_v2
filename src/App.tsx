import React, { useEffect, useState } from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/topbar/topbar';
import QuerySetList from './components/QuerySetList/QuerySetList';
import { QueryInterface } from './interfaces/query.interface';
import { QuerySet } from './domains/querySet';
import { Project } from './domains/project';
import { ProjectService } from './services/projectService';
import { Query } from './domains/query';
import QueryViewer from './components/QueryViewer/QueryViewer';

function App() {
  const [projectIsLoadingState, setIsLoadingState] = useState<boolean>(false);
  const [projectNames, setProjectsNames] = useState<string[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [querySets, setQuerySets] = useState<QuerySet[]>([]);

  const [projectsClasses, setProjectsClasses] = useState<Project[]>([]);
  const [selectedQuery, setSelectedQuery] = useState<Query>();

  let projectService: ProjectService = new ProjectService()

  if (process.env.NODE_ENV === 'development') {
    console.log('React Strict Mode is enabled:', React.StrictMode);
  } else {
    console.log('React Strict Mode is disabled.');
  }

  // TODO: create a general object/class with all the projects, profiles, keys etc?

  useEffect(() => {
    projectService.getProjectIsLoaded().then((isLoading: boolean)=>{
      setIsLoadingState(isLoading);
      setProjectsNames(projectService.getProjectNames());
      setProjects(projectService.getProjects());
    });
  }, []);

  useEffect(()=>{
    projects.forEach(async (project: Project)=>{
      console.log(project.getProjectName());
      await project.getProfilesIsLoaded();
      await project.getKeysIsLoaded();
      await project.getQuerySetIsLoaded().then((isLoading: boolean)=>{
        setQuerySets(project.getQuerySets());
      });
    });

    console.log(`QuerySets: ${querySets}`);
  }, [projects]);

  console.log(`execute app.tsx`);
  // fetchProjects();

  const handleItemSelected = (selectedItem: string | null) => {
    console.log('Selected Item:', selectedItem);
    // Handle the selected item in the parent component
  };

  const handleQuerySelected = (selectedQuery: Query) => {
    console.log('Selected Item (App):', selectedQuery);
    
    setSelectedQuery(selectedQuery);
    // Handle the selected item in the parent component

    console.dir(projectsClasses);
  };

  return (
    <div className="App">
      <Container fluid className="vh-100 min-vh-100 d-flex flex-column">
        <Row className="vh-20">
          <Col>
            <Topbar projectsList={projectNames} projectListIsLoading={projectIsLoadingState} onItemSelected={handleItemSelected}></Topbar>
          </Col>
        </Row>
        <Row className="vh-80 flex-grow-1">
          <Col>
            <div style={{ backgroundColor: "green", display: "inline-block", width: "100%", height: "100%" }}>
              <QuerySetList querySetList={querySets} onQuerySelected={handleQuerySelected}></QuerySetList>
            </div>
          </Col>

          <Col>
            {/* center left */}
            <div style={{ backgroundColor: "yellow", display: "inline-block", width: "100%", height: "100%" }}>
              <QueryViewer query={selectedQuery}></QueryViewer>
            </div>
          </Col>

          <Col>
            {/* side bar right */}
            <div style={{ backgroundColor: "blue", display: "inline-block", width: "100%", height: "100%" }}>
              <p>side bar right</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
