import { ProjectKey } from "../interfaces/projectKey.interface";
import { HttpService } from "./httpService";
import { StatsServerHTTPMockData } from "./mockData";

export class StatsServerHTTPService {
  private httpService: HttpService = new HttpService();

  private readonly returnMockedData = {
    allRequests: false,
    getProjects: true, 
    getProfiles: true,
    getKeysProject: true,
  };

  public getProjects = async (): Promise<string[]> => {
    if(this.returnMockedData.allRequests || this.returnMockedData.getProjects){
      return this.returnMockData('getProjects') as string[];
    }

    const projects = await this.httpService.sendRequest('getProjects') as string[];
    return projects;
  };

  public getProfiles = async (projectname: string): Promise<string[]> => {
    if(this.returnMockedData.allRequests || this.returnMockedData.getProfiles){
      return this.returnMockData('getProfiles') as string[];
    }

    const profiles = await this.httpService.sendRequest(`getProfileNamesFromProject/${projectname}`) as string[];
    return profiles;
  };

  public getKeysFromProject = async (projectname: string): Promise<ProjectKey[]> => {
    if(this.returnMockedData.allRequests || this.returnMockedData.getKeysProject){
      return this.returnMockData('getKeysFromProject') as ProjectKey[];
    }

    const keys = await this.httpService.sendRequest(`getKeysFromProject/${projectname}`) as ProjectKey[];
    return keys;
  };

  private returnMockData(methodName: string): unknown {
    switch (methodName) {
      case 'getProjects':
          console.log(`%c Returning mocked data for ${methodName}`, `color: orange`);
          return StatsServerHTTPMockData.getProjects();
      case 'getProfiles':
          console.log(`%c Returning mocked data for ${methodName}`, `color: orange`);
          return StatsServerHTTPMockData.getProfiles();
      case 'getKeysFromProject':
          console.log(`%c Returning mocked data for ${methodName}`, `color: orange`);
          return StatsServerHTTPMockData.getKeysFromProject();
      default:
        throw new Error(`Method name: ${methodName} not found for returning mocked data.`);
    }
  }
}