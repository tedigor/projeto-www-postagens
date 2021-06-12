const express = require('express');
const routes = new express.Router();
const controller = require('./controller');

routes.get('/posts', controller.getAllPosts);

routes.get('/posts/:id', controller.findPostById);

routes.post('/posts', controller.createPost);

routes.put('/posts', controller.editPost);

routes.delete('/posts/:id', controller.deletePost);

module.exports = routes;
