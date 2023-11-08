// const DBConfig = require('./services/shared/config-service').getConf('DB')

const mongoose = require('mongoose');

// const DB = process.env.MONGO_URI.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

const connectDB = async () => {
    try{
        // const conn = await mongoose.connect(DBConfig.DatabaseUrl);
        const conn = await mongoose.connect("mongodb+srv://geoacepasiliao:pogingace@cluster0.qkr6w09.mongodb.net/denso?retryWrites=true&w=majority");

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    }catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB;