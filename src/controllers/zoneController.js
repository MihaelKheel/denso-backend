const Zone = require('../model/zoneSchema.js')

const { ERROR } = require('../constants/shared/error')
const { SUCCESS } = require('../constants/shared/success')

const getZone = async (req, res) => {
    try {
        const findZone = await Zone.find();

        res.status(SUCCESS.RESPONSE_CODES.C_200).json({
            status: SUCCESS.RESPONSES.RETRIEVAL,
            length: findZone.length,
            data:{
                zone: findZone
            },
        })
    } catch (error) {
        res.status(SUCCESS.RESPONSE_CODES.C_404).json({
            status: ERROR.RESPONSES.API_ERROR_404,
            error
        })
    }
}

const postZone = async (req, res) => {
    try {
        const newZone = await Zone.create(req.body);
        console.log(req.body)

        res.status(SUCCESS.RESPONSE_CODES.C_201).json({
            status: SUCCESS.RESPONSES.CREATE,
            data: {
                Zone: newZone._id,
            },  
        })
    } catch (error) {
        res.status(SUCCESS.RESPONSE_CODES.C_404).json({
            status: ERROR.RESPONSES.API_ERROR_404,
            error: error.message
        })
    }
}

const updateZone = async (req, res) => {
    const id = req.params.id;
    const updatedData  = req.body;

    try{
        const zone = await Zone.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true,
        })

        res.status(200).json({
            status: SUCCESS.RESPONSES.UPDATE,
            data: {
                zone
            }
        });
    }catch (err){
        res.status(404).json({
            status: ERROR.API_ERROR_404,
            message: err.message,
        });
    };
};


const deleteZone = async (req, res) => {
    try {
        await Zone.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: SUCCESS.RESPONSES.DELETE,
            data: null
        })
    } catch (error) {
        res.status(404).json({
            status: ERROR.RESPONSES.API_ERROR_404,
            message: error  .message
        })
    }
}

module.exports = {
    getZone,
    postZone,
    updateZone,
    deleteZone
};