import Post from '../models/Post.js'

export const getPosts = async (_req, res) => {
  try {
    const result = await Post.find();
    res.json({ data: result });
  } catch (err) {
    console.log(err)
  }
};

export const createPost = async (req, res) => {
  try {
    const postData = {
      name: req.body.name,
      description: req.body.description
    }
    const category = new Post(postData);
    const result = await category.save();
    res.status(201).json({ message: "Created Successfully", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const findPosts = async (req, res) => {
  try {
    const findData = await Post.findById(req.params.id)
    res.send({ data: findData })
  } catch (err) {
    console.log(err)
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    post.name = req.body.name;
    post.description = req.body.description;
    const result = await post.save();
    res.json({ message: "Updated Successfully!", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const deletePost = async (req, res) => {
  try {
    await Post.findById(req.params.id);
    await Post.findByIdAndRemove(req.params.id);
    res.json({ message: "Post with id " + req.params.id + " removed." })
  } catch (err) {
    console.log(err)
  }
};