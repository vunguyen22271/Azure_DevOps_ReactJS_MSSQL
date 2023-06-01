const config = {
  user: 'vnguyen233',
  password: '512250',
  server: 'VN-F43K9S3',
  database: 'SQL_Tutorial',
  port: 1433,
  options: {
    trustServerCertificate: true, // true when local
    trustedConnection: false,
    enableAirthAbort: true,
    instancename: 'MSSQLSERVER'
  }
}

module.exports = config;