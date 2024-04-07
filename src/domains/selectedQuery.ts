import { GraphData } from "./graphData";
import { Query } from "./query";
import { QuerySet } from "./querySet";

export class SelectedQuery {
    private querySet: QuerySet;
    private query: Query | null = null;

    private graphData: GraphData | undefined;

    constructor(selectedQuerySet: QuerySet) {
        this.querySet = selectedQuerySet;
    };

    public setSelectedQuery(selectedQuery: Query): Promise<boolean> {
        return new Promise((resolve, reject)=>{ 
            if (this.querySet.isQueryPartOfQuerySet(selectedQuery)) {
                this.query = selectedQuery;
    
                this.getQuery()?.getQueryDetailsIsLoaded().then((result)=>{
                    debugger;
                    if(result){
                        this.graphData = new GraphData(this.getQuerySet().getQueryMetaData().graphType, this.getQuerySet());
                        return resolve(true);
                    }
                    return reject(false);
                });
            }else{
                console.error(`Query ${selectedQuery.getQueryLabel()} is not part of QuerySet`);
                return reject(false);
            }
        });
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

    public getGraphData(): GraphData | undefined {
        // probably want to specify some getter methods here OR on the graphData
        return this.graphData;
    }
}