import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { UserProperties } from "../models/user";
import { api } from "../services/api";

type FetchUserProps = {
  name?: string;
};

const fetchUsers = async ({ name }: FetchUserProps) => {
  const { data } = await api.get(
    name ? `/characters?name=${name}` : `/characters`
  );

  if (!data) return [] as UserProperties[];

  if (name) {
    return [data] as UserProperties[];
  }

  return data as UserProperties[];
};

export function useFetchUsers({ name }: FetchUserProps) {
  return useQuery<UserProperties[], AxiosError>(["users", name], () =>
    fetchUsers({ name })
  );
}
