import axios from "axios";

const BASE_URL = "http://localhost:8000/posts";
export const getAllPosts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching post data from API", error);
    throw error;
  }
};
