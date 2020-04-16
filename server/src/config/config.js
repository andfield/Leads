module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tabchecker',
        user: process.env.DB_USER || 'tabchecker',
        password: process.env.DB_PASS || 'tabchecker',
        options: {
            //Used to tell what type of DB to connect
            dialect: process.env.DIALECT || 'sqlite',
            //Where is the db hosted / located.
            host: process.env.HOST || 'localhost',
            //where to store sqlite file.
            storage: './tabchecker.sqlite'

        }
    },

    //siging the jwt token with seceret string only known by server.
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}