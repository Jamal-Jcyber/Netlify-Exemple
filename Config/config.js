const env = process.env.NODE_ENV || "dev"; // 'dev' or 'production'

const dev = {

    server : {
        host : process.env.HOST,
        port : process.env.PORT || "3000"
        }
};

const production = {

    server : {
        host : process.env.HOST,
        port : process.env.PORT || "5000"
    }
};

const config = {
    dev, production
};

module.exports = config[env];