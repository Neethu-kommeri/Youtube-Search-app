import axios from 'axios';

const API_KEY: string = 'AIzaSyBiTkoQV56R2Hg81vof1HzxYz6wWN0mIlQ'; 

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  },
});

export default youtube;
