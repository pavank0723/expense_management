const dotenv = require('dotenv')

dotenv.config()
export const{
    APP_PORT,
    APP_URL,
    DB_URL,
    DEBUG_MODE,
    JWT_SECRET,
    HASH_SECRET,
    REFRESH_SECRET
} = process.env