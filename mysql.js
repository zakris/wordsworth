// const { Connection, Request } = require("tedious");

// // Create connection to database
// const config = {
//   authentication: {
//     options: {
//       userName: "dickinson", // update me
//       password: "(Test321)" // update me
//     },
//     type: "default"
//   },
//   server: "wordsworth.database.windows.net", // update me
//   options: {
//     database: "wordsworthDatabase", //update me
//     encrypt: true
//   }
// };

// // console.log('hello there');
// const connection = new Connection(config);

// // Attempt to connect and execute queries if connection goes through
// connection.on("connect", err => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log('success!?!');
//     queryDatabase();
//   }
// });

// function queryDatabase() {
//   console.log("Reading rows from the Table...");

//   // Read all rows from table
//   const request = new Request(
//     `SELECT TOP 20 pc.Name as CategoryName,
//                    p.name as ProductName
//      FROM [SalesLT].[ProductCategory] pc
//      JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid`,
//     (err, rowCount) => {
//       if (err) {
//         console.error(err.message);
//       } else {
//         console.log(`${rowCount} row(s) returned`);
//       }
//     }
//   );

//   request.on("row", columns => {
//     columns.forEach(column => {
//       console.log("%s\t%s", column.metadata.colName, column.value);
//     });
//   });

//   connection.execSql(request);
// }

const mysql = require('mysql');

var config =
{
    host: 'wordsworth.database.windows.net',
    user: 'dickinson',
    password: '(Test321)',
    database: 'wordsworthDatabase',
    port: 1433,
    ssl: true
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
    //console.log(err.stack);
        throw err;
    }
    else
    {
       console.log("Connection established.");
           //queryDatabase();
    }
});

