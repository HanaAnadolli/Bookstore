const express = require('express')
const favoritebookRoute = express.Router()

// model
let FavoriteBookModel = require('../models/FavoriteBook')
favoritebookRoute.route('/create-favoritebook').post((req, res, next) => {
  FavoriteBookModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

favoritebookRoute.route('/').get((req, res, next) => {
  FavoriteBookModel.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  favoritebookRoute.route('/edit-favoritebook/:id').get((req, res, next) => {
    FavoriteBookModel.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  
// Update
favoritebookRoute.route('/update-favoritebook/:id').put((req, res, next) => {
  FavoriteBookModel.findByIdAndUpdate(
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
  favoritebookRoute.route('/delete-favoritebook/:id').delete((req, res, next) => {
    FavoriteBookModel.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          msg: data,
        })
      }
    })
  })
  
  module.exports = favoritebookRoute
  

  