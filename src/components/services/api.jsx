import axios from "axios";

const API_KEY='93210ef0891cb87bb9e8c2df09943f12';

export const fetchNews=async(category="general")=>{
    try{
         const response = await axios.get(

        "https://gnews.io/api/v4/top-headlines",
      {
        params: {
          country: "us",
          category: category,
          token: process.env.GNEWS_API_KEY,
          max: 9,
                },
            }
        );
        return response.data.articles;
    } catch(error){
        console.log('API Error:',error);
    }
};