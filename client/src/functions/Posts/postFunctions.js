import axios from "axios";
import { api_url } from "../../utils/api";

// get posts
// export const getPosts = async () => {
//   try {
//     const res = await axios.get(`${api_url}/post`);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// create post
export const createPost = async () => {
  try {
    const res = await axios.post(`${api_url}/post`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
