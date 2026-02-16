import axios from "axios";

const API_KEY='501d31f771d64bb09f6276f9a0289870';

export const fetchNews=async(category="general")=>{
    try{
         const response = await axios.get(

        "https://newsapi.org/v2/top-headlines",
      {
        params: {
          country: "us",
          category: category,
          apiKey: API_KEY,
          pageSize: 9,
                },
            }
        );
        return response.data.articles;
    } catch(error){
        console.log('API Error:',error);
    }
};