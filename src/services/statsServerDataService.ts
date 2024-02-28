import { StatsServerHTTPService } from "./statsServerHTTPService";

export class StatsServiceDataService {
    private projectsList: string[] = [];

    private statsServerHTTPService: StatsServerHTTPService = new StatsServerHTTPService();
   
    constructor(statsServerHTTPService: StatsServerHTTPService) {
      console.log(`init dataService class`);
    }
   
    private setProjects() {
        this.statsServerHTTPService.getProjects();
    }
}