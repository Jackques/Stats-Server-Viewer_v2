export class StatsServerHTTPMockData {
    public static getProjects(){
        return ['T-Helper', 'Fitness-stats'];
    }

    public static getProfiles(){
        return [
            {
              name: 'Jack-original', 
              dateTimeLatestResource: '2023-11-25T17:33:15.000+00:00'
            }, 
            {
              name: 'Jack-updated', 
              dateTimeLatestResource: '2023-12-03T20:55:38.000+00:00'
            }
          ];
    }
}