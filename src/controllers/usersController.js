const Users = require('../model/usersSchema.js')

const { ERROR } = require('../constants/shared/error')
const { SUCCESS } = require('../constants/shared/success')

const getUsers = async (req, res) => {
    try {
        const findUsers = await Users.find();

        res.status(SUCCESS.RESPONSE_CODES.C_200).json({
            status: SUCCESS.RESPONSES.RETRIEVAL,
            length: findUsers.length,
            data:{
                users: findUsers
            },
        })
    } catch (error) {
        res.status(SUCCESS.RESPONSE_CODES.C_404).json({
            status: ERROR.RESPONSES.API_ERROR_404,
            error
        })
    }
}

const postUsers = async (req, res) => {
    try {
        const newUsers = await Users.create(req.body);

        res.status(SUCCESS.RESPONSE_CODES.C_201).json({
            status: SUCCESS.RESPONSES.CREATE,
            data: {
                Users: newUsers._id,
            },  
        })
    } catch (error) {
        res.status(SUCCESS.RESPONSE_CODES.C_404).json({
            status: ERROR.RESPONSES.API_ERROR_404,
            error: error.message
        })
    }
}

const updateUsers = async (req, res) => {
    try{
        const user = await Users.findByIdAndUpdate(req.params.id)

        res.status(200).json({
            status: SUCCESS.RESPONSES.UPDATE,
            data: {
                user
            }
        });
    }catch (err){
        res.status(404).json({
            status: ERROR.API_ERROR_404,
            message: err.message,
        });
    };
};


const deleteUsers = async (req, res) => {
    try {
        await Users.findByIdAndDelete(req.params.id);
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


module.exports = {
    getUsers,
    postUsers,
    updateUsers,
    deleteUsers
};