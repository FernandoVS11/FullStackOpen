const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', (req, res) => {
  Blog.find({}).then(blogs => {
    res.json(blogs)
  })
})

blogRouter.post('/', (req, res) => {
  const blog = new Blog(req.body)
  blog.save().then(saved => res.status(201).json(saved))
})

module.exports = blogRouter
