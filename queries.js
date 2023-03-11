require('dotenv').config()
const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.DB_USER_NAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    // results.rows.map((x) => (x.image = process.env.S3_BUCKET_URL + x.image))
    console.log(results.rows)
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers,
}
