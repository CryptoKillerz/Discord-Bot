const mongoose = require('mongoose');

module.exports = async (client) => {
    
    mongoose.connect(`LMAO`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('connected', () => console.log("DataBase has been connected"));
}
