module.exports = {
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
    pgUser: process.env.PGUSER,
    pgHost: process.env.PGHOST,
    pgDatabase: process.env.PGDATABASE,
    pgPassword: process.env.PGPASSWORD,
    pgPort: process.env.PGPORT
}

// module.exports = {
//     redisHost: "redis",
//     redisPort: '6379',
//     pgUser: "postgres",
//     // pgHost: "postgres",
//     pgHost: "172.18.0.2",
//     pgDatabase: "postgres",
//     pgPassword: "postgres_password",
//     pgPort: 5432
// }








