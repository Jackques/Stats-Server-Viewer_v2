
const BASE_URL = 'http://localhost:8080/api/v1';

const sendRequest = async (url: string, method: string = 'GET'): Promise<any> => {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        // You can add additional headers here
      },
    };
  
    try {
      const response = await fetch(`${BASE_URL}/${url}`, options);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error during API request:', error);
      throw error;
    }
  };
  
  export const getProjects = async (): Promise<string[]> => {
    const projects = await sendRequest('getProjects');
    return projects.response;
  };

  export const getProfiles = async (projectname: string): Promise<string[]> => {
    const profiles = await sendRequest(`getProfileNamesFromProject/${projectname}`);
    return profiles.response;
  };