import dotenv from 'dotenv';

// module.exports = {
dotenv.config({
    masterKey: process.env.API_KEY,
    port: process.env.EXPRESS_PORT
});
// };
