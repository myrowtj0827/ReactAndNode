import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import axios from 'axios';

const superagent = superagentPromise(_superagent, global.Promise);

var isDevelopment = process.env.NODE_ENV === 'development';
// var API_ROOT = 'http://104.129.128.218/api';
// var API_ROOT = 'https://worldsty.com/api'
// var API_ROOT = 'http://worldsty.appkube.codes:3000/api';
var API_ROOT = 'https://api.glosfy.com';
// if (isDevelopment) {
//   API_ROOT = 'http://localhost:3010/api'
// }

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    // req.set('authorization', `Token ${token}`);
    req.set('Authorization', token);
  }
}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  current: () =>
    requests.get('/users/me'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (user) =>
    requests.post('/users', { user: user }),
  resetPassword: (user) =>
    requests.post('/users/resetPassword', { user: user }),
  facebookAuth: (user) =>
    requests.post('/users/facebookAuth', { user: user }),
  save: user =>
    requests.put('/user', { user }),
  uploadPhoto: (data) =>
    axios.post(API_ROOT + '/users/uploadPhoto', data),
  confirmation: (token) =>
    requests.post('/users/confirmation', { token: token }),
  resend: (email) =>
    requests.put('/users/confirmation', { email: email })
};

const Tags = {
  getAll: () => requests.get('/tags')
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = article => Object.assign({}, article, { slug: undefined })
const Articles = {
  all: page =>
    requests.get(`/articles?${limit(10, page)}`),
  byAuthor: (author, page) =>
    requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  byTag: (tag, page) =>
    requests.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`),
  byCategory: (category, page) =>
    requests.get(`/articles?category=${encode(category)}&${limit(10, page)}`),
  bySearch: (search, page) =>
    requests.get(`/articles?${search}&${limit(10, page)}`),
  advancedSearch: (askey, page) =>
    requests.get(`/articles?askey=${askey}&${limit(10, page)}`),
  del: slug =>
    requests.del(`/articles/${slug}`),
  favorite: slug =>
    requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
  feed: () =>
    requests.get('/articles/feed?limit=10&offset=0'),
  get: slug =>
    requests.get(`/articles/${slug}`),
  unfavorite: slug =>
    requests.del(`/articles/${slug}/favorite`),
  update: article =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article =>
    requests.post('/articles', { article }),
  uploadPhoto: (data) =>
    axios.post(API_ROOT + '/articles/uploadPhoto', data),
  getAllCategories: () =>
    requests.get('/articles/categories'),
  purchaseTicket: (slug, purchase) =>
    requests.post(`/articles/${slug}/purchase`, { purchase }),
};

const Purchases = {
  get: (slug) =>
    requests.get(`/purchases/${slug}`),
  getAll: (slug) =>
    requests.get(`/purchases`)
};

const Comments = {
  create: (slug, comment) =>
    requests.post(`/articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`/articles/${slug}/comments/${commentId}`),
  forArticle: slug =>
    requests.get(`/articles/${slug}/comments`)
};

const Profile = {
  follow: username =>
    requests.post(`/profiles/${username}/follow`),
  get: username =>
    requests.get(`/profiles/${username}`),
  unfollow: username =>
    requests.del(`/profiles/${username}/follow`)
};

export default {
  Articles,
  Auth,
  Comments,
  Profile,
  Tags,
  Purchases,
  setToken: _token => { token = _token; }
};
