import axios from 'axios'

export const fetchList = url => axios.get(url);

export const whoAmI = (url, name) => axios.post(url, name);

