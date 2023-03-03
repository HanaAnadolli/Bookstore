const express = require('express')
const bookRoute = express.Router()

// model
let BookModel = require('../models/Book')
bookRoute.route('/create-book').post((req, res, next) => {
  BookModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

bookRoute.route('/').get((req, res, next) => {
    BookModel.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  bookRoute.route('/edit-book/:id').get((req, res, next) => {
    BookModel.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  
// Update
bookRoute.route('/update-book/:id').put((req, res, next) => {
    BookModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
          console.log('Book successfully updated!')
        }
      },
    )
  })
  
  // Delete
  bookRoute.route('/delete-book/:id').delete((req, res, next) => {
    BookModel.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          msg: data,
        })
      }
    })
  })
  
  module.exports = bookRoute
  
