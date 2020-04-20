const pgp = require('pg-promise')(/* initialization options */);
const cn = require('./connect')


// alternative:

const db = pgp({
    host: "127.0.0.1", // server name or IP address;
    port: 5432,
    database: 'UniHunterX',
    user: 'postgres',
    password: 'UniHunterX'
}) // database instance;

// select and return a single user name from id:
db.one('SELECT * FROM monster WHERE id = $1', [1])
    .then(monster => {
        console.log(monster.name) // print user name;
    })
    .catch(error => {
        console.log(error) // print the error;
    })