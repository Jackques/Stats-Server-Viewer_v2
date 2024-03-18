import { Project } from '../domains/project';
import { QuerySet } from '../domains/querySet';
import { StatsServerHTTPService } from './statsServerHTTPService';

export class ProjectService {
    private statsServerHTTPService = new StatsServerHTTPService();

    private projects: Project[] = [];
    private projectsIsLoaded: Promise<boolean> = new Promise(async (resolve, reject)=>{
        let projects: string[] = [];
        try{
            projects = await this.statsServerHTTPService.getProjects();
        }catch(e){
            reject(false);
        }
        console.log(`app useEffect - fetchProjects`);
        console.dir(this.projects);

        projects.forEach((project, index, projects) => {
            console.log(`adding`);
            console.log(`current in projects list: ${this.projects.length}`);
            this.projects.push(new Project(project));

            if(projects.length === (index+1)){
                resolve(true);
            }
        });
    });

    constructor(){
        console.log(`setProjects`);
    }

    public getProjectIsLoaded(): Promise<boolean> {
        return this.projectsIsLoaded;
    }

    public getProjectNames(): string[] {
        return this.projects.map(project => project.getProjectName());
    }

    public getProjects(): Project[] {
        return this.projects;
    }

    public getQuerySets(): QuerySet[] {
        //TODO: Only getting the querySets of the first project for now..
        return this.projects[0].getQuerySets();
    }
}