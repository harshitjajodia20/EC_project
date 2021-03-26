const Pincode= require('../models/pincode-model')

createPincode= (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a pincode',
        })
    }

    const pincode= new Pincode(body)

    if (!pincode) {
        return res.status(400).json({ success: false, error: err })
    }

    pincode
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: pincode._id,
                message: 'Pincodecreated!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Pincodenot created!',
            })
        })
}

updatePincode= async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Pincode.findOne({ _id: req.params.id }, (err, pincode) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Pincodenot found!',
            })
        }
        pincode.name = body.name
        pincode.quantity = body.quantity
        pincode.price= body.price
        pincode
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: pincode._id,
                    message: 'Pincodeupdated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Pincodenot updated!',
                })
            })
    })
}

deletePincode= async (req, res) => {
    await Pincode.findOneAndDelete({ _id: req.params.id }, (err, pincode) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!pincode) {
            return res
                .status(404)
                .json({ success: false, error: `Pincodenot found` })
        }

        return res.status(200).json({ success: true, data: pincode})
    }).catch(err => console.log(err))
}

getPincodeById = async (req, res) => {
    await Pincode.findOne({ _id: req.params.id }, (err, pincode) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: pincode})
    }).catch(err => console.log(err))
}

getPincodes = async (req, res) => {
    await Pincode.find({}, (err, pincodes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!pincodes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Pincodenot found` })
        }
        return res.status(200).json({ success: true, data: pincodes })
    }).catch(err => console.log(err))
}

module.exports = {
    createPincode,
    updatePincode,
    deletePincode,
    getPincodes,
    getPincodeById,
}
