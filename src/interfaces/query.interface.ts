import { Profile } from "./profile.interface";

export interface QueryInterface {
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