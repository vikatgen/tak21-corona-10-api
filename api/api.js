import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_X_RapidAPI_Key,
		'X-RapidAPI-Host': import.meta.env.VITE_X_RapidAPI_Host
	  }
});

export default API;