const express = require('express');
const router = express.Router();
const VQTest = require('../../models/VQTest');

/*
* @route POST api/users/register
* @desc Register the User
* @ access Public
*/

//GetAll vqtests
router.get('/getAll',async (req,res)=>{
  VQTest.find({}).then(vqtests=>{
     return  res.status(200).json(vqtests);
  });
});

router.post('/submit',(req,res)=>{
  let {
     ans1,
     ans2,
     ans3,
     ans4,
     ans5,
     ans6,
     ans7,
     ans8,
     ans9,
     ans10,
     ans11,
     ans12,
     ans13,
     ans14,
     ans15,
     ans16,
     ans17,
     ans18,
     ans19,
     ans20,
     ans21,
     ans22,
     ans23,
     ans24,
     ans25,
     name
   } = req.body;

    let newVQTest = new VQTest({
      ans1,
      ans2,
      ans3,
      ans4,
      ans5,
      ans6,
      ans7,
      ans8,
      ans9,
      ans10,
      ans11,
      ans12,
      ans13,
      ans14,
      ans15,
      ans16,
      ans17,
      ans18,
      ans19,
      ans20,
      ans21,
      ans22,
      ans23,
      ans24,
      ans25,
      name
    });

    newVQTest.save().then(newVQTest=>{
          return res.status(201).json({
            success:true,
            msg:"VQTest is saved"
          });

});
});


module.exports = router;
