const APIURL = process.env.NODE_ENV === 'production'
    ? 'https://infinite-scrubland-22520.herokuapp.com/'
    : 'http://localhost:8000/'

export default APIURL