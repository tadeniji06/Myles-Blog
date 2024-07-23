import axios from "axios";
import { api_url } from "../../utils/api";

//login
export const login = async () => {
  try {
    const res = await axios.post(`${api_url}auth/login`);
  } catch (error) {}
};
