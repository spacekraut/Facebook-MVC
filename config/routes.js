const express = require('express')
const router = express.Router()
const FEED = require('../model/postModel')


router.get('/feed', async (req,res) => {
  // if(req.body.name.length<15){
  //   res.render('feed', {err:'should be longer than 15'})
  // } else{
    const feeds =await FEED.find({}).sort({create_at: -1})
    res.render('feed',{feeds})
    console.log(feeds);
  // }
  

   
})

router.post('/feed',async (req,res) => {
    try {
        const newFeed = new FEED(req.body);
        await newFeed.save();
        console.log(newFeed);
        res.redirect('/feed');

      } catch (error) {
        console.error('Fields are empty');
        res.status(500).send('Fields should not be empty. Name cannot be more than 15 characters. Message cannot be more than 40 characters');
      }
}) 

// router.get('/feeds/:id', (req,res) => {
//   const id = req.params.id
//   console.log(id);
//   FEED.findById(id)
//   .then(result) =>{
//     render('details', {FEED: result})
//   }
// })

module.exports = router;