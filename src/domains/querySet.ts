import { GraphType } from "../interfaces/graphType.enum";
import { Profile } from "../interfaces/profile.interface";
import { QueryInterface } from "../interfaces/query.interface";
import { QuerySetInterface } from "../interfaces/querySet.interface";
import { Query } from "./query";

export class QuerySet {
    private projectName: string;
    private querySet: QuerySetInterface;
    private queries: Query[];

    constructor(projectName: string, querySet: QuerySetInterface){
        this.projectName = projectName;
        this.querySet = querySet;
        this.queries = querySet.queries.map(query => new Query(this.projectName, querySet.id, query));

        //todo: should really refactor that the queryId is part of the query object in querySet.query and not querySet.querySetResults
        querySet.querySetResults.queryResults.forEach((queryResult: { id: string, labelForThisQuery: string, totalResults: number }, index: number)=>{
            this.queries[index].setQueryId(queryResult.id);
        });
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

    public getQueryMetaData(): {
        affectedProfileNames: Profile[], 
        graphType: GraphType
    }{
        return {
            affectedProfileNames: this.getQuerySet().queryMetaData.affectedProfileNames,
            graphType: this.getQuerySet().queryMetaData.graphType
        }
    }

    public isQueryPartOfQuerySet(selectedQuery: Query): boolean {
        const index = this.queries.findIndex((query: Query) => query.getQueryLabel() === selectedQuery.getQueryLabel());
        return index === -1 ? false : true;
    }
}