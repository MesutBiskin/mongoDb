// import tools from pg library.
// import { Client } from 'pg'

import pg from 'pg'
const { Client } = pg

// import connection string from credentials / secrets file
import { connectionURI } from './src/secret.js'

// create client connection to database
const client = new Client({
    connectionString:connectionURI,
})

// open connection
await client.connect()

// run query
const results = await client.query('SELECT * FROM customers')

console.table(results.rows)

// close connection
client.end