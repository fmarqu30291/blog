const dotenv = require('dotenv');
dotenv.config();

const dbConnect = {
    url: process.env.MONGO_URL,
}

module.exports = dbConnect;