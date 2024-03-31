import { Project } from '../domains/project';
import { QuerySet } from '../domains/querySet';
import { StatsServerHTTPService } from './statsServerHTTPService';

export class ProjectService {
    private statsServerHTTPService = new StatsServerHTTPService();
    private isProjectsLoaded = false;

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
                this.isProjectsLoaded = true;
                resolve(true);
            }
        });
    });

    constructor(){
        console.log(`setProjects`);
    }

    public loadProjects(): Promise<boolean> {
        return this.projectsIsLoaded;
    }

    public hasProjectsLoaded(): boolean {
        return this.isProjectsLoaded;
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

    public getFirstProject(): Project {
        return this.projects[0];
    }

    public getProjectByProjectName(projectName: string): Project | undefined {
        return this.projects.find(project => project.getProjectName() === projectName);
    }
}