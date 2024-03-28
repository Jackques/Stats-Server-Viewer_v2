import { QueryInterface } from "../interfaces/query.interface";
import { QueryDetails } from "../interfaces/queryDetails.interface";
import { StatsServerHTTPService } from "../services/statsServerHTTPService";

export class Query {
    private projectName: string;
    private querySetId: string;
    private query: QueryInterface;
    private queryId: string | null = null;
    private isLoadedQuery: Promise<boolean> | undefined = undefined;
    private queryDetails: QueryDetails | undefined = undefined;

    private statsServerHTTPService: StatsServerHTTPService = new StatsServerHTTPService();

    constructor(projectName: string, querySetId: string, query: QueryInterface){
        this.projectName = projectName;
        this.querySetId = querySetId;
        this.query = query;
    }

    public setQueryId(id: string): void {
        this.queryId = id;
    }

    public getQueryId(): string {
        if(!this.queryId){
            throw new Error(`QueryId not found for individual query`);
        }
        return this.queryId
    }

    public getQuerySetId(): string {
        return this.querySetId;
    }

    public getQueryLabel(): string {
        return this.query.labelForThisQuery;
    }

    public getQueryColor(): string {
        return this.query.colorQuery;
    }

    public getQueryFromDate(): string {
        return this.query.fromDate;
    }

    public getQueryToDate(): string {
        return this.query.toDate;
    }

    public getQueryDetailsIsLoaded(): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            if(!this.isLoadedQuery){
                this.isLoadedQuery = this.loadQueryDetails();
                this.isLoadedQuery.then((isSucces: boolean)=>{
                    isSucces ? resolve(true) : reject(false);
                });
                return;
            }
            resolve(true);
        });
    }

    public getQueryDetails(): QueryDetails | undefined {
        return this.queryDetails;
    }

    private loadQueryDetails(): Promise<boolean> {
        return new Promise(async (resolve, reject)=>{
            let queryDetailsResult: QueryDetails | undefined = undefined;

            try{
                queryDetailsResult = await this.statsServerHTTPService.getQueryDetails(this.projectName, this.getQuerySetId(), this.getQueryId());
            }catch(e){
                reject(false);
            }
            this.queryDetails = queryDetailsResult;
            resolve(true);
        });
    }
}