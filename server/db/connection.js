const mongoose = require('mongoose');
const ENV = {
    MONGO_URI : 'mongodb+srv://ghl:dL5IEnzT3FdVJzx3@cluster0.glbaa.mongodb.net/ghlcustomization?retryWrites=true&w=majority',
  }
const connectDB = async () =>{
    try{
        await mongoose.connect(ENV.MONGO_URI ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connection success');
    }catch(error){
        console.log('connection FUCK');
    }
}

module.exports =connectDB;
