'use strict'

const after = (options, server, next) => {
  server.route({
    method: 'GET',
    path: '/',
    handler: { view: { template: 'bienvenue' } }
  })

  server.route({
    method: 'GET',
    path: '/exercices',
    handler: { view: { template: 'exercices' } }
  })

  server.route({
    method: 'GET',
    path: '/rendus',
    handler: { view: { template: 'rendus' } }
  })

  server.route({
    method: 'GET',
    path: '/resultats',
    handler: { view: { template: 'score' } }
  })

  server.route({
    method: 'GET',
    path: '/testing',
    handler: { view: { template: 'testing' } }
  })

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: './assets/'
      }
    }
  })

  next()
}

exports.register = (server, options, next) => {
  server.dependency(['inert', 'vision', 'visionary'], after.bind(null, options))
  next()
}

exports.register.attributes = {
  name: 'hello-world',
  version: '0.0.0'
}
