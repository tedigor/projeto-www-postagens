const dataBase = require('./database');


const findPostById = (req, res) => {
    let post;

    dataBase.posts.forEach((el) => {
        if (el.id == req.params.id) post = el;
    });

    if (post === undefined) {
        res.status(400).json({ 'code': res.statusCode, 'status': 'Post not found!' });
    } else {
        res.json({ 'code': res.statusCode, 'data': post });
    }
}

const getAllPosts = (req, res) => {
    res.json({ 'code': res.statusCode, 'data': dataBase.posts });
}

const createPost = (req, res) => {

    const { id, author, content } = req.body;

    dataBase.posts.push({ id, author, date: new Date(), content });
    res.status(201).json({ 'code': res.statusCode, 'status': 'Success!' });

}

const editPost = (req, res) => {

    const { id, author, content } = req.body;
    let wasFinded;


    dataBase.posts.forEach((el) => {
        if (el.id == id) {
            wasFinded = true;
            el.author = author;
            el.date = new Date();
            el.content = content;
        }
    });

    if (wasFinded) {
        res.status(200).json({ 'code': res.statusCode, 'status': 'Success!' });
    } else {
        res.status(400).json({ 'code': res.statusCode, 'status': 'Post not found!' });
    }
}

const deletePost = (req, res) => {
    let wasFinded;

    for (let i = 0; i < dataBase.posts.length; i++) {
        let element = dataBase.posts[i];
        if (element.id == req.params.id) {
            wasFinded = true;
            dataBase.posts.splice(i, 1);
        }
    }

    if (wasFinded) {
        res.status(200).json({ 'code': res.statusCode, 'status': 'Success!' });
    } else {
        res.status(400).json({ 'code': res.statusCode, 'status': 'Post not found!' });
    }
}

module.exports = { findPostById, getAllPosts, createPost, editPost, deletePost };