import { Query } from "./query";
import { QuerySet } from "./querySet";

export class SelectedQuery {
    private querySet: QuerySet;
    private query: Query | null = null;

    constructor(selectedQuerySet: QuerySet) {
        this.querySet = selectedQuerySet;
    };

    public setSelectedQuery(selectedQuery: Query): boolean {
        if (this.querySet.isQueryPartOfQuerySet(selectedQuery)) {
            this.query = selectedQuery;
            return true;
        }
        console.error(`Query ${selectedQuery.getQueryLabel()} is not part of QuerySet`);
        return false;
    }

    public isQuerySelected(): boolean {
        return this.query ? true : false;
    }

    public getQuerySet(): QuerySet {
        return this.querySet;
    }

    public getQuery(): Query | null {
        return this.query;
    }
}