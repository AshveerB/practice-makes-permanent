const APIURL = process.env.NODE_ENV === 'production'
    ? 'https://practice-makes-permanent.herokuapp.com/'
    : 'http://localhost:8000/'

export default APIURL