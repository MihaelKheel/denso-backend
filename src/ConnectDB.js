// const DBConfig = require('./services/shared/config-service').getConf('DB')

const mongoose = require('mongoose');

// const DB = process.env.MONGO_URI.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

const connectDB = async () => {
    try{
        // const conn = await mongoose.connect(DBConfig.DatabaseUrl);
        const conn = await mongoose.connect("mongodb://geoacepasiliao:pogingace@ac-ga0zstu-shard-00-00.qkr6w09.mongodb.net:27017,ac-ga0zstu-shard-00-01.qkr6w09.mongodb.net:27017,ac-ga0zstu-shard-00-02.qkr6w09.mongodb.net:27017/?ssl=true&replicaSet=atlas-i0vvcb-shard-0&authSource=admin&retryWrites=true&w=majority");

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    }catch (error){
        console.log(error)          
        process.exit(1)
    }
}

module.exports = connectDB;