import axios from "axios";
import { QueryClient } from "react-query";

export const api = axios.create({
  baseURL: "https://psychonauts-api.herokuapp.com/api"
});

export const queryClient = new QueryClient();
