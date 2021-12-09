import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { UserProperties } from "../models/user";
import { api } from "../services/api";

const fetchUsers = async () => {
  const { data } = await api.get<UserProperties[]>(`/characters`);

  return data;
};

export function useFetchUsers() {
  return useQuery<UserProperties[], AxiosError>("users", fetchUsers);
}
