import { GraphDataSet } from "../interfaces/graphDataSet.interface";
import { GraphType } from "../interfaces/graphType.enum";
import { QuerySet } from "./querySet";

export class GraphData {
    private graphLabels: string[] = [];
    private graphDataSet: GraphDataSet[] = [];

    constructor(graphType: GraphType, querySet: QuerySet) {
        
        switch (graphType) {
            case GraphType.COLUMN_CHART:
                this.graphLabels = this.setGraphLabelsColumnChart(querySet);
                this.graphDataSet = this.setGraphDataColumnChart(querySet);
                break;
            case GraphType.LINE_GRAPH:
                this.graphLabels = this.setGraphLabelsLineGraph(querySet);
                this.graphDataSet = this.setGraphDataLineGraph(querySet, this.graphLabels);
                break;
            default:
                throw new Error(`Unknown graph type`);
        }


        // i got two graphs i want to support (and maybe a third in the future); vertical columns, line chart (and maybe in the future; expendature-income overview)
        // the vertical columns needs labels, every graph is a label (every individual query? if 1 query selected then 1 query will be shown)
            // the value (totalResults) is for the y-axis (the size of the bar)
            // the tooltip value ???
        // the line chart will show every entry, the date field will be used as label (x-axis), every individual query is it's own line
            // the value (any numeric value) must be chosen/set (in returnValues property.. which i kinda neglected)
            // the tooltip value ???

            // PROBLEM: I cannot determine in my app which property i need to use for the y-axis (size of column, position of y-axis, (FUTURE) entry into block)! TODO: In my Java app I need the returnFields to NOT return an array, but an object! Like this
            /* 

            // for fitnes (line chart)
            {
                x-axis-value: "Datum",
                y-axis-value: "Gewicht",
                tooltip: gewicht as number
            }

            // for t-helper (column)
            {
                x-axis-value: null, // N.A; needs to be query label
                y-axis-value: totalResults // totalResults for this specific query, this will always stay the same
                tooltip: totalResults number
            }

            // for expendature-income overview (custom made)
            {
                x-axis-value: name "naam/beschrijving entry", 
                y-axis-value: chosen numeric/decimal value "valuta"
                tooltip: all other values? condensed as one displayed on a single or multi line?
            }

            */
        //(FUTURE expendature-income chart) every entry will be it's own block. Depending on if the value is positive or negative it will either be on the income or outcome side.
    }
    private setGraphLabelsLineGraph(querySet: QuerySet): string[] {
        //TODO: Get x-axis from returnFields value (date- OR numberfield for fitness)
        //TODO: HARDCODED DATE / DATUM HERE
        const itemsArray: string[] = [];
        querySet.getQueries().forEach((query)=>{
            // debugger;
            query.getQueryDetails()?.queryResultsList.forEach((queryDetail)=>{
                // debugger;
                const value = String(queryDetail['Datum']);
                if(!itemsArray.includes(value)){
                    itemsArray.push(value);
                }
            });
        });
        return itemsArray;
    }
    
    private setGraphDataLineGraph(querySet: QuerySet, graphLabels: string[]): GraphDataSet[] {
        //TODO: Get y-axis from returnFields value (gewicht OR spiermassa OR vetpercentage etc. for fitness)
        const graphDataSets: GraphDataSet[] = [];
        // graphLabels.forEach((graphLabel)=>{
            // debugger;

            querySet.getQueries().forEach((query) => {
                const graphDataSet: GraphDataSet = {
                    data: [],
                    backgroundColor: query.getQueryColor(),
                    borderColor: query.getQueryColor(), // TODO: slightly darker border! Tip: Use TinyColor: https://github.com/bgrins/TinyColor
                    borderWidth: 1,
                    tooltipText: '',
                };
                debugger;
                query.getQueryDetails()?.queryResultsList.forEach((queryDetail) => {
                    debugger;
                    const date = queryDetail['Datum'] as string;
                    graphDataSet.data?.push(graphLabels.includes(date) ? Number(queryDetail['Gewicht in kg']) : 0);
                    graphDataSet.tooltipText = String(queryDetail['Notities']);
                });
                graphDataSets.push(graphDataSet);
            });

        // });
        return graphDataSets;
    }

    private setGraphLabelsColumnChart(querySet: QuerySet): string[] {
        return querySet.getQueries().map((query)=>{
            return query.getQueryLabel();
        });
    }
    private setGraphDataColumnChart(querySet: QuerySet): GraphDataSet[] {
        return querySet.getQueries().map((query)=>{
            const queryResultsLength: number | undefined = query.getQueryDetails()?.queryResultsList.length;

            return {
                data: [queryResultsLength],
                backgroundColor: query.getQueryColor(),
                borderColor: query.getQueryColor(), // TODO: slightly darker border! Tip: Use TinyColor: https://github.com/bgrins/TinyColor
                borderWidth: 1,
                tooltipText: queryResultsLength ? this.getPercentageQueryOfQuerySet(queryResultsLength, querySet) : '',
            }
        });
    }

    private getPercentageQueryOfQuerySet(queryResultsLength: number, querySet: QuerySet): string {
        return (100 * queryResultsLength / querySet.getQuerySet().querySetResults.totalResults).toString();
    }
}