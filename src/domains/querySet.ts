import { QueryInterface } from "../interfaces/query.interface";
import { QuerySetInterface } from "../interfaces/querySet.interface";
import { Query } from "./query";

export class QuerySet {
    private querySet: QuerySetInterface;
    private queries: Query[];

    constructor(querySet: QuerySetInterface){
        this.querySet = querySet;
        this.queries = querySet.queries.map(query => new Query(query));
    }

    public getQuerySet(): QuerySetInterface {
        return this.querySet;
    }

    public getQuerySetName(): string {
        return this.querySet.name;
    }

    public getQuerySetQueries(): QueryInterface[] {
        return this.querySet.queries;
    }

    public getQueries(): Query[] {
        return this.queries;
    }
}