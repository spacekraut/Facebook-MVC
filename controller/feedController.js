const FEED = require('../model/postModel')

const controller = {};

controller.feedRedirect = (req,res) => {
  res.redirect('/feed')
};

controller.getFeed = async(req,res) =>{
    const feeds =await FEED.find({}).sort({create_at: -1})
    res.render('feed',{feeds})
    console.log(feeds);
};

controller.createFeed = async (req,res) => {
    try {
        const newFeed = new FEED(req.body);
        await newFeed.save();
        console.log(newFeed);
        res.redirect('/feed');

      } catch (error) {
        console.error('Fields are empty');
        res.status(500).send('Fields should not be empty. Name cannot be more than 15 characters. Message cannot be more than 40 characters');
      }
}; 

controller.getFeedById = (req,res) => {
    const id = req.params.id;
    console.log(id);
    FEED.findById(id)
    .then(result =>{
      res.render('details', {feed: result, title: 'Your message'}) 
    })
    .catch(err =>{
      console.log(err);
    })
  };

  controller.deleteFeedById = (req, res) => {
    const id = req.params.id;
    FEED.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/feed' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Error');
        })};

  





module.exports = controller;