const pgp = require('pg-promise')(/* initialization options */);
const cn = require('./connect')


// alternative:

const db = pgp(cn) // database instance;

// select and return a single user name from id:
db.one('SELECT * FROM monster WHERE id = $1', [1])
    .then(monster => {
        console.log(monster.name) // print user name;
    })
    .catch(error => {
        console.log(error) // print the error;
    })