import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


  export const fetchApi = async (url) => {
      const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '0c72a6a575msh0ada5ce448e4021p1f5f44jsn2b2efbae0540'
          }  
      });
      
      return data;
  }