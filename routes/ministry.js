import express from 'express';

const router = express.Router();

router.get('/', async (req, res, next) =>{
  try{
    res.render('index', { title: 'Ministry Names' });
  }catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

export default router