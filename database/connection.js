const mongoose = require('mongoose');

module.exports = async (client) => {
    
    mongoose.connect(`mongodb+srv://DBUser2149:DBUser32039@cluster0.eyrns.mongodb.net/Data?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('connected', () => console.log("DataBase has been connected"));
}