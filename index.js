const jsonServer = require("json-server");
const  server = jsonServer.create()
const router = jsonServer.router("EndPoint.json")
const middleweres = jsonServer.defaults();
 const port = process.env.port||3000
 server.use(middleweres)
 server.use(router)



 server.listen(port,(res,err)=>console.log("json sarver start",port))
  