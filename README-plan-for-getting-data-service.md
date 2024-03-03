My plan for seperating the concerns of getting the data & viewing it in my React app.

1. Create a seperate (service) class for getting, storing & updating the data
2. V This class also features getting mock data, retrieved from different mock files (for unit-testing & early development)
3. This class can be imported & used for retrieving/updating data for use in it's component
3. The structure for getting the data is as follows;
    1. V Get the projects (list of strings)
    2. V Get the profiles of said projects (list of strings of each project)
    3. V Also get the keys of said projects (list of strings of each project)
    4. V Also get the values of said keys (list of strings OR valueType (string))
    5. V Also get all the queries (only the name & description) of a project (???)
    6. Refactor logic to get projects first, profiles per project second, keys per project third and lastly list values per key which has list values last. This logic must go in the statsServerDataService class. This class should also have a 'loading' property to indicate wether my app is still busy fetching the necessary data (or not if unnecessary, i.e. listValues are not necessary, can be loaded in the background).
4. Queries go in a seperate service?

5. Queries can be retrieved/created/updated/deleted
    1. Get the query details?

* Keep in mind all data (projects, profiles, keys, NOT values ofc.) should (in the future) be able to be retrieved/created/updated/deleted