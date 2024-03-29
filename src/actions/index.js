import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";
export const FETCH_RESTAURANTS = "fetch_restaurants";
export const FETCH_FOODS = "fetch_foods";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=PAPERCLIP1235656564";
const myURL = "http://127.0.0.1:8000/api"

export function fetchRestaurants() {
  const request = axios.get(`${myURL}/restaurants`);

  return {
    type: FETCH_RESTAURANTS,
    payload: request
  };
}

export function fetchFoods(id) {
  const request = axios.get(`${myURL}/foods/${id}`);
  return {
    type: FETCH_FOODS,
    payload: request
  };
}

export function createOrder(values, callback) {
  const request = axios
    .post(`${myURL}/orders/?`, values)
    .then(() => callback());

  return {
    type: CREATE_ORDERS,
    payload: request
  };
}


export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
