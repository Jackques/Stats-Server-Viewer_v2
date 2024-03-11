import { Profile } from "./profile.interface";
import { Query } from "./query.interface";
import { QueryResult } from "./queryResult.interface";

export interface QuerySet {
    description: string,
    id: string,
    name: string,
    projectName: string,
    queries: Query[],
    queryMetaData: {
        affectedProfileNames: Profile[],
        graphType: string
    },
    querySetResults: {
        amountOfQueries: number,
        queryResults: QueryResult[],
        totalResults: number
    }
}