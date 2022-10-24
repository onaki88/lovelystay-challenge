import { axiosClient } from "./axiosClient";
import { AxiosResponse } from "axios";

export const getUsers = (
  username: string
): Promise<AxiosResponse<any, any>> => {
  return axiosClient.get("/search/users", {
    params: {
      per_page: 10,
      page: 1,
      q: username,
    },
  });
};

export const getUserProfile = (
  username: string
): Promise<AxiosResponse<any, any>> => {
  return axiosClient.get(`/users/${username}`);
};
