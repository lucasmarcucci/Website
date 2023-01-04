const tedious = require('tedious');
const sql = require('mssql')

const config = {
    server: 'LUCAS\\SQLEXPRESS',
    database: 'Killerbee',
    user: 'Lucas',
    password: 'root',
    options: {
        trustedConnection: true
    }
}

async function connect() {
    try {
      // Connect to the database
      const pool = await sql.connect(config);
      console.log("Connected");

    } catch (err) {
      console.error('Error occurred:', err);
    }
  }

async function query() {
    try {
        // Create a new request
        const request = new sql.Request(pool);
    
        // Execute a query
        const result = await request.query('SELECT * FROM Models');
    
        console.log(result);
      } catch (err) {
        console.error('Error occurred:', err);
      }
}
  
db = connect();
models = connect();
module.export = db, models;

// sql.connect(config, function(err) {
//     console.log('Connected to databse')
//     const result = sql.query ('select * from Models')
//     console.log(result)
// })

// // sql.connect(config, function(err) {
// //     if(err) {
// //         console.log(err)
// //     } else {
// //         console.log('Connected')
// //     }
// // })

// // async () => {
// //     try {
// //        await sql.connect(config)
// //        console.log('Connected to databse')
// //     } catch(err) {
// //         console.log(err)
// //     }
// // }