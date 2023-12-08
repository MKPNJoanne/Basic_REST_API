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
router.get('/:id',getExample,(req, res) => { //:id means parameter
res.send(res.example.name) // Send a string res(response
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
router.patch('/:id ',getExample,(req, res) => { // if we use put then all of the information of the example will be upated

})
//Deleting one resource
router.delete('/:id',getExample,(req, res) => { 

})
  async function getExample(req, res, next) {
    let example 
    try{
         example = await example.findById(req.params.id)
        if (example ==null) return res.status(404).json({message: 'Cannot find example'})
        }
    catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.example = example
    netx()
 }

module.exports =router

