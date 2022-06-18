const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require ('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  res.render('drones/list')
})

router.get('/drones', async (req, res, next) => {
  try{
    const newDrone = await Drone.find({})
    res.render('drones/list' , { newDrone })
  }
  catch(e){
    console.log(e)
    next(e)
  }

});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', async(req, res, next) => {
  
  try{
    const {name, propellers, maxSpeed} = req.body
    const propellersInt = parseInt(propellers);
    const speedInt = parseInt(maxSpeed);
    await Drone.create({ name, propellers: propellersInt, maxSpeed: speedInt })
    res.redirect('/drones/create')
  }
  catch(e){
    res.render('drones/create-form')
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
 try {
  const { _id } = request.params;
  const newDrone= await Drone.findById({_id});
  res.render('drones/update-form');
 }
 catch(e) {
   console.log(e)
 }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  try{
    const { _id } = req.params
    const {name, propellers, maxSpeed} = req.body
    const propellersInt = parseInt(propellers);
    const speedInt = parseInt(maxSpeed);
    const newDrone = await Drone.findByIdAndUpdate(_id, { name, propellers: propellersInt, maxSpeed: speedInt })
    res.redirect('/drones/create')
  }
  catch(e){
    res.render('drones/update-form');
  }
});


router.post('/drones/:id/delete', (req, res, next) => {
  try {
    const { _id } = request.params;
    const newDrone = await Drone.findByIdAndDelete({_id});
    res.redirect('/drones')
   }
   catch(e) {
     console.log(e)
   }
  
});

module.exports = router;
