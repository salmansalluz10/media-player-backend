// import json file
const jsonserver = require('json-server')

//create server
const mediaPlayerServer = jsonserver.create()

//create middleware to convert the json format
const middleware = jsonserver.defaults()

//import db,json file 
const router = jsonserver.router("database.json")

// set port for the server
const PORT = 4200 || process.env.PORT

//server use middleware
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//listen
mediaPlayerServer.listen(PORT,()=> {
  console.log(`successful ${PORT}`);
})