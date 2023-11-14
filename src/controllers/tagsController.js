const Tags = require('../model/tagsSchema.js')

const { ERROR } = require('../constants/shared/error')
const { SUCCESS } = require('../constants/shared/success')

const getTags = async (req, res) => {
    try {
        const findTags = await Tags.find();

        res.status(SUCCESS.RESPONSE_CODES.C_200).json({
            status: SUCCESS.RESPONSES.RETRIEVAL,
            length: findTags.length,
            data:{
                tags: findTags
            },
        })
    } catch (error) {
        res.status(SUCCESS.RESPONSE_CODES.C_404).json({
            status: ERROR.RESPONSES.API_ERROR_404,
            error
        })
    }
}

const deleteTags = async (req, res) => {
    try {
        await Tags.findByIdAndDelete(req.params.id);
        // await Parts.deleteMany({  })
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

const postTags = async (req, res) => {
    try {
        const newTags = await Tags.create(req.body);
        console.log(req.body)

        res.status(SUCCESS.RESPONSE_CODES.C_201).json({
            status: SUCCESS.RESPONSES.CREATE,
            data: {
                Tags: newTags._id,
            },  
        })
    } catch (error) {
        res.status(SUCCESS.RESPONSE_CODES.C_404).json({
            status: ERROR.RESPONSES.API_ERROR_404,
            error: error.message
        })
    }
}

const updateTags = async (req, res) => {
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


module.exports = {
    getTags,
    postTags,
    updateTags,
    deleteTags
};