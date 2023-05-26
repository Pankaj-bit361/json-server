// server.js

const path = require('path');

const jsonServer = require('json-server')
const server = jsonServer.create()


const fs = require('fs')
const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')))
const router = jsonServer.router(db)

// const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 


server.use(middlewares)
server.use('', router)
server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
})
