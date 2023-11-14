const Parts = require('../model/partsSchema.js')

const { ERROR } = require('../constants/shared/error')
const { SUCCESS } = require('../constants/shared/success')

const getParts = async (req, res) => {
    try {
        const findParts = await Parts.find();

        res.status(SUCCESS.RESPONSE_CODES.C_200).json({
            status: SUCCESS.RESPONSES.RETRIEVAL,
            length: findParts.length,
            data:{
                parts: findParts
            },
        })
    } catch (error) {
        res.status(SUCCESS.RESPONSE_CODES.C_404).json({
            status: ERROR.RESPONSES.API_ERROR_404,
            error
        })
    }
}

const postParts = async (req, res) => {
    try {
        const newParts = await Parts.create(req.body);
        console.log(req.body)

        res.status(SUCCESS.RESPONSE_CODES.C_201).json({
            status: SUCCESS.RESPONSES.CREATE,
            data: {
                parts: newParts._id,
            },  
        })
    } catch (error) {
        res.status(SUCCESS.RESPONSE_CODES.C_404).json({
            status: ERROR.RESPONSES.API_ERROR_404,
            error: error.message
        })
    }
}

const deleteParts = async (req, res) => {
    try {
        // await Parts.findByIdAndDelete(req.params.id);
        await Parts.deleteMany({  })
        res.status(204).json({
            status: SUCCESS.RESPONSES.DELETE,
            data: null
        })
    } catch (error) {
        res.status(404).json({
            status: ERROR.API_ERROR_404,
            message: err.message
        })
    }
}

module.exports = {
    getParts,
    postParts,
    deleteParts
};