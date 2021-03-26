const express = require('express')

const PincodeCtrl = require('../controllers/pincode-ctrl')

const router = express.Router()

router.post('/pincode', PincodeCtrl.createPincode)
router.put('/pincode/:id', PincodeCtrl.updatePincode)
router.delete('/pincode/:id', PincodeCtrl.deletePincode)
router.get('/pincode/:id', PincodeCtrl.getPincodeById)
router.get('/pincodes', PincodeCtrl.getPincodes)

module.exports = router
