const { isValidObjectId } = require('mongoose')
const driverModel = require('../../models/Driver')

async function get_drivers(req, res) {
    try {
        const drivers = await driverModel.find({})
        res.status(200).json(drivers)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

async function get_driver_specific(req, res) {
    const id = req.params.id
    if (!isValidObjectId(id)) return res.status(400).json({message: 'Invalid Id provided'})

    try {
        const driver = await driverModel.findById(id)
        res.status(200).json(driver.toJSON())
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function create_driver(req, res) {
    try {
    const dbRes = await driverModel.create(req.body)
    res.status(200).json({message: 'Driver Created Successfully', data: dbRes.toJSON()})

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function update_driver(req, res) {
    const id = req.params.id
    if (!isValidObjectId(id)) return res.status(400).json({message: 'Invalid Id provided'})

    try {
        const dbRes = await driverModel.updateOne({_id: id}, req.body)
        if (dbRes.acknowledged) {
            res.status(200).json({message: 'Driver details updated successfully!'})
        } else {
            res.status(500).json({message: 'Failed to update driver details!'})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }


}

async function delete_driver(req, res) {
    const id = req.params.id
    if (!isValidObjectId(id)) return res.status(400).json({message: 'Invalid Id provided'})

    try {
        const dbRes = await driverModel.deleteOne({_id: id})
        if (dbRes.acknowledged) {
            res.status(200).json({message: 'Driver Deleted Successfully'})
        } else {
            res.status(500).json({message: 'Failed to delete user!'})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    get_drivers,
    get_driver_specific,
    create_driver,
    update_driver,
    delete_driver
}