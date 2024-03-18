import { QueryInterface } from "../interfaces/query.interface";

export class Query {
    private query: QueryInterface;

    constructor(query: QueryInterface){
        this.query = query;
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
}