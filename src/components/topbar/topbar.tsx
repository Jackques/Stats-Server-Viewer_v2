import React, { FC, useEffect, useState } from 'react';
import './topbar.scss';
import { Dropdown } from 'react-bootstrap';

interface TopbarProps {
  projectsList: string[],
  onItemSelected: (selectedItem: string) => void;
}

const Topbar: FC<TopbarProps> = ({projectsList, onItemSelected}) => {
  const [projectOptions, setProjectOptions] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>();

  const errorMessageFalsy = "EventKey for setting project is falsy. Please check the Bootstrap-React dropdown library.";
  const errorMessageInvalidNumber = "EventKey for setting project is invalid number. Please check the Bootstrap-React dropdown library.";

  useEffect(() => {
    if(projectsList && projectsList.length > 0){
      setProjectOptions(projectsList);
      setSelectedItem(projectsList[0]);
      onItemSelected(projectsList[0]);
    }
  }, [onItemSelected, projectsList]);


  const handleSelect = (eventKey: string | null) => {
    if(!eventKey){
      console.error(errorMessageFalsy);
      throw Error(errorMessageFalsy);
    }

    const eventKeyAsNumber: number = Number(eventKey);
    if(eventKeyAsNumber < 0 || isNaN(eventKeyAsNumber)){
      console.error(errorMessageInvalidNumber);
      throw Error(errorMessageInvalidNumber);
    }

    setSelectedItem(projectOptions[eventKeyAsNumber]);
    onItemSelected(projectOptions[eventKeyAsNumber]);
  };
  
  return (<div className="topbar-container" data-testid="Topbar">
    <div className="topbar">
    <h1 className="topbar-title">Stats-Viewer</h1>
    {/* <Button variant="secondary">Add project</Button>{' '} */}
    {
      projectOptions.length > 0 ? (
    <Dropdown onSelect={handleSelect} className="topbar-dropdown">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      {selectedItem || 'Selecteer een project'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          projectOptions.map((project, index) => <Dropdown.Item key={project} eventKey={index} href="#/action-1">{project}</Dropdown.Item>)
          // Key is needed for react to identify which element has been changed.
        }
      </Dropdown.Menu>
    </Dropdown>) : (
    <p>Loading...</p>
    )}
    </div>
  </div>)
};

export default Topbar;
