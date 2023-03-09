const mongoose = require('mongoose')
const Schema = mongoose.Schema

let favoritebookSchema = new Schema(
  {
    name:{
        type:String
    },
   book:{
        type:String
    },
    email:{
        type:String
    },
    description:{
        type:String
  }
},
  {
    collection: 'favoritebooks', 
  },
)

module.exports = mongoose.model('FavoriteBook', favoritebookSchema)
