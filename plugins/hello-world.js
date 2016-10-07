'use strict'

const after = (options, server, next) => {
  console.log('after...')

  server.route({
    method: 'GET',
    path: '/',
    config: {
      handler: { view: { template: 'bienvenue' } },
      description: 'Home sweet home (desc)',
      notes: 'Home sweet home, a note',
      tags: ['fi', 'fe', 'fo']
    }
  })

  server.route({
    method: 'GET',
    path: '/testing',
    config: {
      handler: { view: { template: 'testing' } },
      description: 'Home sweet home (desc)',
      notes: 'Home sweet home, a note',
      tags: ['fi', 'fe', 'fo']
    }
  })

  next()
}

exports.register = (server, options, next) => {
  console.log('register...')
  server.dependency(['vision', 'visionary'], after.bind(null, options))
  next()
}

exports.register.attributes = {
  name: 'hello-world',
  version: '0.0.0'
}
