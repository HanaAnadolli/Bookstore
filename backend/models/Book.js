const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bookSchema = new Schema(
  {
    img:{
        type:String
    },
    name:{
        type:String
    },
    author:{
        type:String
    },
    price:{
        type:Number
    },
    category:{
        type:String
    },
    description:{
        type:String
  }
},
  {
    collection: 'books', 
  },
)

module.exports = mongoose.model('Book', bookSchema)
