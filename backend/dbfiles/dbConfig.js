// Azure SQL Database

const config = {
  user: 'azureuser',
  password: 'sqltutorial@12345',
  server: 'vusqltutorialserver.database.windows.net',
  database: 'sqltutorialdatabase',
  port: 1433
}

// SQL Database local

// const config = {
//   user: 'vnguyen233',
//   password: '512250',
//   server: 'VN-F43K9S3',
//   database: 'SQL_Tutorial',
//   port: 1433,
//   options: {
//     trustServerCertificate: true, // true when local
//     // trustedConnection: false,
//     // enableAirthAbort: true,
//     // instancename: 'MSSQLSERVER'
//   }
// }


module.exports = config;