// import json-server  in index.js 

const jsonserver = require('json-server')

// create a server for json file

const mediaplayerserver =jsonserver.create()

// Setup a path for json file

const router = jsonserver.router('db.json')

// return a middleware used by json server

const middlewares = jsonserver.defaults()

// setup a port for running json server

const port=4000 || process.env.port

// use middlewares and router in sever

mediaplayerserver.use(middlewares)
mediaplayerserver.use(router)

//  to listen server for resolving request from server

mediaplayerserver.listen(port,()=>{
    console.log(`mediaplayer is listening at port${port} and waiting for the client request !!!`);
})