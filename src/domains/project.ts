import { Profile } from "../interfaces/profile.interface";
import { ProjectKey } from "../interfaces/projectKey.interface";
import { QuerySetInterface } from "../interfaces/querySet.interface";
import { StatsServerHTTPService } from "../services/statsServerHTTPService";
import { QuerySet } from "./querySet";

export class Project {
    private projectName: string;
    private profiles: Profile[] = [];
    private keys: ProjectKey[] = [];

    private querySets: QuerySet[] = [];

    private isLoadingProfiles: Promise<boolean> | undefined; 
    private isLoadingKeys: Promise<boolean> | undefined; 
    private isLoadingQuerySets: Promise<boolean> | undefined; 
    private statsServerHTTPService: StatsServerHTTPService = new StatsServerHTTPService();

    constructor(project: string){
        this.projectName = project;
    }

    public getProjectName(): string {
        return this.projectName;
    }

    public addQuerySet(querySet: QuerySet): void {
        this.querySets.push(querySet);
    }

    public getQuerySets(): QuerySet[] {
        return this.querySets;
    }

    public getProfilesIsLoaded(): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            if(!this.isLoadingProfiles){
                this.isLoadingProfiles = this.loadProfiles();
                this.isLoadingProfiles.then((isSuccess)=>{
                    isSuccess ? resolve(true) : resolve(false);
                });
                return;
            }
            resolve(true);
        });
    }

    public getKeysIsLoaded(): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            if(!this.isLoadingKeys){
                this.isLoadingKeys = this.loadKeys();
                this.isLoadingKeys.then((isSuccess)=>{
                    isSuccess ? resolve(true) : resolve(false);
                });
                return;
            }
            resolve(true);
        });
    }

    public getQuerySetIsLoaded(): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            if(!this.isLoadingQuerySets){
                this.isLoadingQuerySets = this.loadQuerySets();
                this.isLoadingQuerySets.then((isSuccess)=>{
                    isSuccess ? resolve(true) : resolve(false);
                });
                return;
            }
            resolve(true);
        });
    }

    private loadKeys(): Promise<boolean> {
        return new Promise(async (resolve, reject)=>{
            let keys: ProjectKey[] = [];
            try{
                keys = await this.statsServerHTTPService.getKeysFromProject(this.projectName);
            }catch(e){
                reject(false);
            }
            keys.forEach(key => {
                this.keys.push(key);
            });
            resolve(true);
        });
    }

    private loadProfiles(): Promise<boolean> {
        return new Promise(async (resolve, reject)=>{
            let profiles: Profile[] = [];
            try{
                profiles = await this.statsServerHTTPService.getProfiles(this.projectName);
            }catch(e){
                reject(false);
            }
            profiles.forEach(profile => {
                this.profiles.push(profile);
            });
            resolve(true);
        });
    }

    private loadQuerySets(): Promise<boolean> {
        return new Promise(async (resolve, reject)=>{
            let querySets: QuerySetInterface[] = [];
            try{
                querySets = await this.statsServerHTTPService.getAllQueriesFromProject(this.projectName);
            }catch(e){
                reject(false);
            }
            querySets.forEach(querySet => {
                this.querySets.push(new QuerySet(this.projectName, querySet));
            });
            resolve(true);
        });
    }
}