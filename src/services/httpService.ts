export class HttpService {
    private BASE_URL = 'http://localhost:8080/api/v1';

    public sendRequest = async (subUrl: string, method: string = 'GET'): Promise<unknown> => {
        const options: RequestInit = {
          method,
          headers: {
            'Content-Type': 'application/json',
            // You can add additional headers here
          },
        };
      
        try {
          const response = await fetch(`${this.BASE_URL}/${subUrl}`, options);
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const results = await response.json();
          return results.response;
        } catch (error) {
          console.error('Error during API request:', error);
          throw error;
        }
      };
}