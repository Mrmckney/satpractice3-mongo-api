const express = require('express')
const router = express.Router() 
const countryController = require('../controllers/countriesController')

// route to create a country
router.post('/addcountry', countryController.createCountry)
// route to update a country
router.patch('/updatecountry/:name', countryController.updateCountry)
// route to delete a country
router.delete('/deletecountry/:name', countryController.deleteCountry)
// route to get a country
router.get('/getonecountry/:name', countryController.getOneCountry)

module.exports = router