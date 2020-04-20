// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('./combat_db', ( err ) => {
//     if( err ){
//         console.error(err.message)
//     }
//     console.log("Connected")
// })

// db.serialize( () => {
//     db.each( 'SELECT * FROM monsters', (err, row) => {
//         if(err){
//             console.error(err.message)
//         }
//         console.log( row.name + "\t")
//     })
// })

// db.close((err) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log('Close the database connection.');
//   });

//   export default test = () => console.log("yay")