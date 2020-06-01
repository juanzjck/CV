
const BASE_URL='http://192.168.100.10:8000/api';



async function callApi(endpoint, options = {}) {
    options.headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
    
      const url = BASE_URL + endpoint;
      const response = await fetch(url, options); 
      //const data=await response.json();  
    console.log(response)
  
    return 'd';
    
  }


  const api = {
    post: {
      list() {
        return callApi('/posts', { method: 'GET'});
      },
      
      // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
      remove(badgeId) {
        return callApi(`/badges/${badgeId}`, {
          method: 'DELETE',
        });
      },
    },
  };
  
  export default api;
  