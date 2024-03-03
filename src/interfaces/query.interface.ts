import { Profile } from "./profile.interface";

export interface Query {
    amount: string,
    fromDate: string,
    toDate: string,
    colorQuery: string,
    fromProfiles: Profile[],
    labelForThisQuery: string,
    visibilityQuery: true,
    returnFields: string[],
    queryParameters: []
}