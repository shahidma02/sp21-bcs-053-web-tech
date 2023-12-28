const express = require("express");
const router = express.Router();
const Post = require("../models/post");



router.get('/display', async (req, res) => {
    try {
        
        const posts = await Post.find();

        res.render('display', { title: 'Display', posts });
    } catch (error) {
        
        console.error(error);
        res.status(500).render('error', { error: 'Internal Server Error' });
    }
});

router.post("/create", async(req,res)=>{
    try{
        const newPost=new Post(req.body)
        const savedPost = await newPost.save()
        res.redirect("/");
        
    }
    catch(err){
        res.status(200).json(err)
    }
} )

router.get("/edit/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);

        if (!post) {
            res.status(404).send('Post not found');
            return;
        }
        res.render('edit', { title: "Edit Post", post });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { error: 'Internal Server Error' });
    }
});

router.post('/update/:id', async (req, res) => {
    try {
        
        const postId = req.params.id;

        const result = await Post.findByIdAndUpdate(postId, {
            title: req.body.title,
            categories: req.body.categories,
            desc: req.body.desc,
        }, { new: true });

        if (!result) {
            
            return res.status(404).send('Post not found');
        }

        req.session.message = {
            type: 'success',
            message: 'Updated Successfully'
        };
        res.redirect('/');
    } catch (err) {
       
        console.error(err);
        res.status(500).render('error', { error: 'Internal Server Error' });
    }
});

router.get('/delete/:id', async (req, res) => {
    let id = req.params.id;
    try {
        const result = await Post.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send('Post not found');
        }

        

        req.session.message = {
            type: 'info',
            message: 'Post Deleted Successfully'
        };
        res.redirect('/');
    } catch (err) {
        res.json({ message: err.message });
    }
})







module.exports = router;