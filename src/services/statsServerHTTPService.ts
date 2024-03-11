import { Profile } from "../interfaces/profile.interface";
import { Project } from "../interfaces/project.interface";
import { ProjectKey } from "../interfaces/projectKey.interface";
import { QuerySet } from "../interfaces/querySet.interface";
import { HttpService } from "./httpService";
import { StatsServerHTTPMockData } from "./mockData";

export class StatsServerHTTPService {
  private httpService: HttpService = new HttpService();

  private readonly returnMockedData = {
    allRequests: false,
    getProjects: true, 
    getProfiles: true,
    getKeysProject: true,
    getAllListValuesFromKey: false,
    getAllQueriesFromProject: false,
  };

  public getProjects = async (): Promise<string[]> => {
    if(this.returnMockedData.allRequests || this.returnMockedData.getProjects){
      return this.returnMockData('getProjects') as string[];
    }

    const projects = await this.httpService.sendRequest('getProjects') as string[];
    return projects;
  };

  public getProfiles = async (projectname: string): Promise<Profile[]> => {
    if(this.returnMockedData.allRequests || this.returnMockedData.getProfiles){
      return this.returnMockData('getProfiles') as Profile[];
    }

    const profiles = await this.httpService.sendRequest(`getProfileNamesFromProject/${projectname}`) as Profile[];
    return profiles;
  };

  public getKeysFromProject = async (projectname: string): Promise<ProjectKey[]> => {
    if(this.returnMockedData.allRequests || this.returnMockedData.getKeysProject){
      return this.returnMockData('getKeysFromProject') as ProjectKey[];
    }

    const keys = await this.httpService.sendRequest(`getKeysFromProject/${projectname}`) as ProjectKey[];
    return keys;
  };

  public getAllListValuesFromKey = async (projectname: string, keyName: string): Promise<string[]> => {
    if(this.returnMockedData.allRequests || this.returnMockedData.getAllListValuesFromKey){
      return this.returnMockData('getAllListValuesFromKey') as string[];
    }

    const listValues = await this.httpService.sendRequest(`getAllListValuesFromKeyInProject/${projectname}/${keyName}`) as string[];
    return listValues;
  };

  public getAllQueriesFromProject = async (projectname: string): Promise<QuerySet[]> => {
    if(this.returnMockedData.allRequests || this.returnMockedData.getAllQueriesFromProject){
      return this.returnMockData('getAllQueriesFromProject') as QuerySet[];
    }

    const queriesFromProject = await this.httpService.sendRequest(`getAllQueriesFromProject/${projectname}`) as QuerySet[];
    return queriesFromProject;
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
      case 'getAllListValuesFromKey':
          console.log(`%c Returning mocked data for ${methodName}`, `color: orange`);
          return StatsServerHTTPMockData.getAllListValuesFromKey();
      case 'getAllQueriesFromProject':
          console.log(`%c Returning mocked data for ${methodName}`, `color: orange`);
          return StatsServerHTTPMockData.getAllQueriesFromProject();
      default:
        throw new Error(`Method name: ${methodName} not found for returning mocked data.`);
    }
  }
}