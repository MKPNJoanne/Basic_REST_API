const express = require('express')
const router= express.Router()
const Example = require('../models/exampleS')

//Getting all resources
router.get('/',async (req, res) => {
try{
 const example = await Example.find()
  // getting all the resources
  res.json(example)
} catch (err) {
res.status(500).json({message: err.message})
} 
// Send a string res(response ) in a format other than JSON 
//500 error on the server

})

//Getting one resource
router.get('/:id',(req, res) => { //:id means parameter
res.send(req.params.id) // Send a string res(response
})


//Creating one resource
router.post('/', async (req, res) => { 
    const example = new Example({
        name: req.body.name,
        sendingTo: req.body.sendingTo,
    })

    try{
        const newExample = await example.save()
        res.status(201).json({newExample})
        //201 => succesful sent
    }
    catch (err) {
    res.status(400).json({message: err.message})    
    }

})



//Updating one resource
router.patch('/:id ',(req, res) => { // if we use put then all of the information of the example will be upated

})
//Deleting one resource
router.delete('/:id',(req, res) => { 

})

module.exports =router

