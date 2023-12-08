 const mongoose = require('mongoose') // creating a model to interact with database in a easy way

const exampleSchema = new mongoose.Schema({ // creating a javascript object
// this will have keys for all the idffernet properties of our exampleS
name: {
// define different properties our the schema
type: String,
required: true,
},
sendingTo: {
    type: String,
    required: true,
},

date: {
type:Date,
required: true,
default: Date.now
},

})

//export the schema
module.exports =mongoose.model('Example', exampleSchema)
// the reason why we need to have the 'model' property it allows us to interact with the database directly using the schema