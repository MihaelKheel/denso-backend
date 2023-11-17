const Groups = require('../model/groupsSchema.js')

const { ERROR } = require('../constants/shared/error')
const { SUCCESS } = require('../constants/shared/success')

const getGroups = async (req, res) => {
    try {
        const findGroups = await Groups.find();

        res.status(SUCCESS.RESPONSE_CODES.C_200).json({
            status: SUCCESS.RESPONSES.RETRIEVAL,
            length: findGroups.length,
            data:{
                groups: findGroups
            },
        })
    } catch (error) {
        res.status(SUCCESS.RESPONSE_CODES.C_404).json({
            status: ERROR.RESPONSES.API_ERROR_404,
            error
        })
    }
}

const postGroups = async (req, res) => {
    try {
        const newGroups = await Groups.create(req.body);
        console.log(req.body)

        res.status(SUCCESS.RESPONSE_CODES.C_201).json({
            status: SUCCESS.RESPONSES.CREATE,
            data: {
                groups: newGroups._id,
            },
        })
    } catch (error) {
        res.status(SUCCESS.RESPONSE_CODES.C_404).json({
            status: ERROR.RESPONSES.API_ERROR_404,
            error: error.message
        })
    }
}

const updateGroups = async (req, res) => {
    const id = req.params.id;
    const updatedData  = req.body;

    try{
        const groups = await Groups.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true,
        })

        res.status(200).json({
            status: SUCCESS.RESPONSES.UPDATE,
            data: {
                groups
            }
        });
    }catch (err){
        res.status(404).json({
            status: ERROR.API_ERROR_404,
            message: err.message,
        });
    };
};

module.exports = {
    getGroups,
    postGroups,
    updateGroups
};