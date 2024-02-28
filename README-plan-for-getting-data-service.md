My plan for seperating the concerns of getting the data & viewing it in my React app.

1. Create a seperate (service) class for getting, storing & updating the data
2. V This class also features getting mock data, retrieved from different mock files (for unit-testing & early development)
3. This class can be imported & used for retrieving/updating data for use in it's component
3. The structure for getting the data is as follows;
    1. V Get the projects (list of strings)
    2. V Get the profiles of said projects (list of strings of each project)
    3. Also get the keys of said projects (list of strings of each project)
    4. Also get the values of said keys (list of strings OR valueType (string))
    5. Also get all the queries (only the name & description) of a project (???)
4. Queries go in a seperate service?

5. Queries can be retrieved/created/updated/deleted
    1. Get the query details?

* Keep in mind all data (projects, profiles, keys, NOT values ofc.) should (in the future) be able to be retrieved/created/updated/deleted