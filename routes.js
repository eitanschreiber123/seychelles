const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()
routes.add('index', '/')
routes.add('cart', '/cart')
routes.add('fish', '/blog/:slug')
