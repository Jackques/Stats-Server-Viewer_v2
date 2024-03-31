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

  const [hasAllQueriesAllProjectsLoaded, setAllQueriesAllProjectsLoaded] = useState<boolean>(false);

  let projectService: ProjectService = new ProjectService()

  if (process.env.NODE_ENV === 'development') {
    console.log('React Strict Mode is enabled:', React.StrictMode);
  } else {
    console.log('React Strict Mode is disabled.');
  }

  // TODO: create a general object/class with all the projects, profiles, keys etc?

  useEffect(() => {
    projectService.loadProjects().then((isLoading: boolean) => {
      setIsLoadingState(isLoading);
      setProjectsNames(projectService.getProjectNames());
      setProjects(projectService.getProjects());
    });
  }, []);

  useEffect(() => {
    //TODO: MOVE THIS LOGIC BELOW TO PROJECTSERVICE ITSELF? FOR SOME REASON THE PROJECT DATA IS NOT LOADED INTO THE PROJECTS
    projects.forEach(async (project: Project, index: number, projectsArray: Project[]) => {
      console.log(project.getProjectName());
      await project.getProfilesIsLoaded();
      await project.getKeysIsLoaded();
      await project.getQuerySetIsLoaded().then((isLoading: boolean) => {
        console.log(`QuerySets loaded for project; ${project.getProjectName()}, querySets:`);
        console.dir(project.getQuerySets());
        console.dir(querySets);
        console.log(`---------------------------------------------------------------------`);

        if (index >= (projectsArray.length - 1)) {
          setAllQueriesAllProjectsLoaded(true);
          console.log(`%c Projects loaded`, `color: green`);
        }
      });
    });
  }, [projects]);

  useEffect(() => {
    setQuerySetsFromProject();
  }, [hasAllQueriesAllProjectsLoaded]);


  function setQuerySetsFromProject(project: Project | null = null){
    console.log(`%c useEffect hasAllQueriesAllProjectsLoaded`, `color: yellow`);
    if (projectService.hasProjectsLoaded()) {
      console.log(`%c useEffect hasAllQueriesAllProjectsLoaded - hasProjectsLoaded true`, `color: yellow`);
      const selectedProject = project ? project : projectService.getFirstProject();
      selectedProject.getQuerySetIsLoaded().then((isLoaded) => {
        console.log(`%c useEffect hasAllQueriesAllProjectsLoaded - getQueryIsLoaded is ${isLoaded}`, `color: yellow`);
        if (isLoaded) {
          console.log(`%c useEffect hasAllQueriesAllProjectsLoaded - hasProjectsLoaded true`, `color: yellow`);
          setQuerySets(selectedProject.getQuerySets());
          console.log(`%c useEffect hasAllQueriesAllProjectsLoaded - setQuerySets`, `color: yellow`);
        }
      });
    }
  }

  console.log(`execute app.tsx`);
  // fetchProjects();

  const handleProjectSelected = (selectedProject: string | null) => {
    console.log('Selected Project:', selectedProject);
    if(selectedProject){
      const project = projectService.getProjectByProjectName(selectedProject);
      if(project){
        setQuerySetsFromProject(project);
        return;
      }
    }
    console.error(`selectProject is null`);
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
            <Topbar projectsList={projectNames} projectListIsLoading={projectIsLoadingState} onItemSelected={handleProjectSelected}></Topbar>
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
