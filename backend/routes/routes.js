const express =require('express');
const router=express.Router();
const  sticker=require('../models/models.js');
const  superman=require('../models/supermans');
const  newmodel=require('../models/newmodel');


/*var myArray = {1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoq-8KwQec6KnDmUBfFpne8jXpsIKE87sGvA&usqp=CAU",2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThb2bhKZo1mc0SloD3nySgMPZIz1ON2d_ejQ&usqp=CAU" ,3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNv5uuTgKDuryWeUxqRfsBWfC0O-Ddrql31g&usqp=CAU"};
          */
const homeController = require('../controllers/homecontroller');
const databaseController = require('../controllers/dbcontroller')

router.post('/find',homeController.home);
router.post('/findname',homeController.submit);



router.post('/list',databaseController.list);
router.post('/add', databaseController.add);
router.delete('/delete',databaseController.delete);
router.post('/update',databaseController.put);




  

module.exports=router