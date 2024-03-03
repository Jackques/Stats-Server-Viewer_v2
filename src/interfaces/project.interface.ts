import { GraphType } from "./graphType.enum"
import { Profile } from "./profile.interface"
import { Query } from "./query.interface"
import { QueryResult } from "./queryResult.interface"

export interface Project {
    id: string,
    name: string,
    description: string,
    projectName: string,
    querySetResults: {
        totalResults: number,
        amountOfQueries: number,
        queryResults: QueryResult[]
    },
    queryMetaData: {
        affectedProfileNames: Profile[],
        graphType: GraphType.COLUMN_CHART
    },
    queries: Query[]
}