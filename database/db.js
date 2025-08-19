const mongoose = require('mongoose');

const conexaoDb = () => {
    mongoose.connect(
        process.env.DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(()=> console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = conexaoDb;