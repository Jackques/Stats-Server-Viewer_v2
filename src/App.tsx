import React, { useEffect, useState } from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button';
import {Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/topbar/topbar';
import { StatsServerHTTPService } from './services/statsServerHTTPService';
import { ProjectKey } from './interfaces/projectKey.interface';

function App() {
  const statsServerHTTPService = new StatsServerHTTPService();
  const [projects, setProjects] = useState<string[]>([]);
  
  // TODO: create a general object/class with all the projects, profiles, keys etc?

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // const projects: string[] = await getProjects();
        const projects: string[] = await statsServerHTTPService.getProjects();
        console.log(`app useEffect - fetchProjects`);
        console.dir(projects);
        

        const profilesPromises = projects.map(async (project) => {
          // const profile = await getProfiles(project);
          const profile: string[] = await statsServerHTTPService.getProfiles(project);
          return { project, profile };
        });

        const keysFromProjectPromises = projects.map(async (project) => {
          const keys: ProjectKey[] = await statsServerHTTPService.getKeysFromProject(project);
          return keys;
        });

        // Wait for all profile requests to complete
      const profilesData = await Promise.all(profilesPromises);
      const keysFromProjectData = await Promise.all(keysFromProjectPromises);

      // Now you have an array of { project, profile } objects
      console.log('Projects with Profiles:', profilesData);
      console.log('Projects with Keys:', keysFromProjectData);

      setProjects(projects);

      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const projects: string[] = await statsServerHTTPService.getProjects();
  //       console.log(`app useEffect - fetchProjects`);
  //       console.dir(projects);
  //       setProjects(projects);
  //     } catch (error) {
  //       console.error('Error fetching projects:', error);
  //     }
  //   };

  // }, projects);

  const handleItemSelected = (selectedItem: string | null) => {
    console.log('Selected Item:', selectedItem);
    // Handle the selected item in the parent component
  };

  return (
    <div className="App">
      <Container fluid className="vh-100 d-flex flex-column">
      <Row className="vh-20">
        <Col>
          <Topbar projectsList={projects} onItemSelected={handleItemSelected}></Topbar>
        </Col>
      </Row>
      <Row className="vh-80">
        <Col>
          <div style={{backgroundColor: "green", display: "inline-block", width: "100%", height: "100%"}}>
            <p>side bar left</p>
          </div>
        </Col>
        
        <Col>
          {/* center left */}
          <div style={{backgroundColor: "yellow", display: "inline-block", width: "100%", height: "100%"}}>
            <p>center</p>
          </div>
        </Col>

        <Col>
          {/* side bar right */}
          <div style={{backgroundColor: "blue", display: "inline-block", width: "100%", height: "100%"}}>
            <p>side bar right</p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
