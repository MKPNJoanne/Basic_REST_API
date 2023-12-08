const express = require('express')
const router= express.router()

//Getting all resources
router.get('/',(req, res) => {
res.send('Hello World') // Send a string res(response ) in a format other than JSON 
})
//Getting one resource
router.get('/:id',(req, res) => { //:id means parameter

})
//Creating one resource
router.post('/',(req, res) => { 

})
//Updating one resource
router.patch('/:id ',(req, res) => { // if we use put then all of the information of the example will be upated

})
//Deleting one resource
router.delete('/:id',(req, res) => { 

})

module.exports =router

