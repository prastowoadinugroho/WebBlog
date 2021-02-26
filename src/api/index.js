import Axios from 'axios';

const url = 'http://localhost:4000/posts';

export const fetchPosts = () => Axios.get(url);