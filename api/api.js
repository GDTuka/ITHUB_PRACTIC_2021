const router = require("express").Router();
const order = require('./models/furniture')
const parser = require("body-parser").json();

router.get('/', async (req,res) =>{
    const data = await order.find({}) 
    res.json(data); 
})

router.post('/',parser,async (req,res)=>{
    await order(req.body).save()
    res.json({'msg': 'ok'})
})
module.exports = router;
