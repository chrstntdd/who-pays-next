'use strict';

const Hapi = require('hapi'),
      Path = require('path'),
      // Create a server with a host and port
      server = new Hapi.Server(),
      rootDir = Path.join(__dirname, '..');

server.register([require('vision'), require('inert')], (err) => {

    if (err) {
        console.log('Failed to load plugin:', err);
    }
});

server.connection({
    port: 4000
});

console.log('rootDir', Path.join(rootDir, 'dist/js'));

server.route({
    path: '/js/{param*}',
    method: 'GET',
    handler: {
        directory: {
            path: Path.join(rootDir, 'dist/js'),
            index: false,
            listing: true
        }
    }
});

server.route({
    path: '/client/{param*}',
    method: 'GET',
    handler: {
        directory: {
            path: Path.join(rootDir, 'dist/client/'),
            index: false,
            listing: true
        }
    }
});

server.route({
    path: '/node_modules/{param*}',
    method: 'GET',
    handler: {
        directory: {
            path: Path.join(rootDir, 'node_modules'),
            index: false
        }
    },
    config: {
        auth: false
    }
});

// Add the route
server.route({
    method: 'GET',
    path:'/test/{name}',
    handler: function (request, reply) {

        return reply('Hello, ' + encodeURIComponent(request.params.name)+ '!');
    }
});

server.route({
    method: 'GET',
    path:'/{param*}',
    handler: function (request, reply) {

        return reply.view('index.html.hbs');
    }
});

server.route({
    path: '/systemjs.config.js',
    method: 'GET',
    handler: function (req, reply) {
        reply.file(Path.join(rootDir, 'systemjs.config.js'));
    }
});

server.views({
    engines: { hbs: require('handlebars') },
    path: Path.join(rootDir, 'client')
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
