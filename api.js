import axios from "axios";
const YOUR_APP_ID = "b0c0d915";
const YOUR_APP_KEY= "3258af47ee4e1330e5609a83bf3eff1d";	

export const getRecipes = async (query) => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  return await axios.get(url);
};