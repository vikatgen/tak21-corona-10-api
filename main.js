import API from './api/api.js';

API.get('/countries').then((response) => console.log(response.data.response));

