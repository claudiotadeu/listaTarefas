const mongoose = require('mongoose');

const conexaoDb = () => {
    mongoose.connect(
        "mongodb+srv://root:admin@listatarefas.afp3hbb.mongodb.net/",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(()=> console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = conexaoDb;