import { Profile } from "./profile.interface";
import { QueryInterface } from "./query.interface";
import { QueryResult } from "./queryResult.interface";

export interface QuerySetInterface {
    description: string,
    id: string,
    name: string,
    projectName: string,
    queries: QueryInterface[],
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