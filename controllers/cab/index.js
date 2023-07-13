const {isValidObjectId}= require("mongoose");
const cabmodel=require('../../models/Cab');

async function cab_add(req,res){
    try {
        const dbRes = await cabmodel.create(req.body)
        res.status(200).json({message: 'Cab added Successfully', data: dbRes.toJSON()})
        } catch (error) {
            res.status(400).json({message: error.message})
        }

}
async function cab_get(req,res)
{
    try {
        const cabs = await cabmodel.find({})
        console.log(cabs)
        res.status(200).json(cabs)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}
async function cab_specific(req,res)
{
    const id = req.params.id
    if (!isValidObjectId(id)) return res.status(400).json({message: 'Invalid Id provided'})

    try {
        const cab = await cabmodel.findById(id)
        res.status(200).json(cab.toJSON())
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
async function cab_update(req,res){
    const id = req.params.id
    if (!isValidObjectId(id)) return res.status(400).json({message: 'Invalid Id provided'})

    try {
        const dbRes = await cabmodel.updateOne({_id: id}, req.body)
        if (dbRes.acknowledged) {
            res.status(200).json({message: 'Cab details updated successfully!'})
        } else {
            res.status(500).json({message: 'Failed to update cab details!'})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}
async function cab_delete(req,res){
    const id = req.params.id
    if (!isValidObjectId(id)) return res.status(400).json({message: 'Invalid Id provided'})

    try {
        const dbRes = await cabmodel.deleteOne({_id: id})
        if (dbRes.acknowledged) {
            res.status(200).json({message: 'cab Deleted Successfully'})
        } else {
            res.status(500).json({message: 'Failed to delete !'})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    cab_add,
    cab_get,
    cab_specific,
    cab_update,
    cab_delete

}