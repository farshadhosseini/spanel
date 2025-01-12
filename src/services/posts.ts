import { Axios } from "../config/axios.config";
import { general } from "../constants/config";
import { IPost } from "../interfaces/posts";

export const createPostReq = (post: IPost) => {
  return Axios.post("/posts", post);
};

export const getPostsReq = (page: number) => {
  return Axios.get(`/posts?_page=${page}&_limit=${general.per_page}`);
};

export const getPostReq = (id: number) => {
  return Axios.get(`/posts/${id}`);
};

export const udpatePostReq = (id: number, post: IPost | undefined) => {
  return Axios.patch(`/posts/${id}`, post);
};

export const removePostReq = (id: number) => {
  return Axios.delete(`/posts/${id}`);
};
