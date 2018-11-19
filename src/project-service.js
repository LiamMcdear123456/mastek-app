const express = require('express')
const app = express()
const port = 3990

var bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


app.get('/', (req, res) => {
var message="Welcome to Mastek Employee Application"
res.send(message)
console.log(message) //so this prints to console every time this method is called
})


//format of Express Web API
//<app-name>.<http-method>(<URL-path,(req,res)={ business logic for processing response})

// http://localhost:3990/projects/list/61078

// /projects/list/:path-variable-name
app.get('/projects/list/:empno',(req,res) => {
    var empno = req.params.empno
    console.log("fetching projects for employee : " +empno)
    res.send("fetching projects for employee :" +empno)
    res.send(message)
    console.log(message)
})

// http://localhost:3990/projects/delete/61078/2
app.delete('/projects/delete/:empno/:projectid',(req,res) => {
    var empno = req.params.empno
    var projectId = req.params.projectid
    var message = "deleting project: " +projectId+"for Employee" +empno
    console.log(message)
    res.send(message)
})

// http://localhost:3990/projects/register
app.post('/projects/register',(req,res) => {
    var empno = req.body.empno
    var pid = req.body.pid
    var pname = req.body.pname
    var ploc = req.body.ploc

    var message = "Registering Project for Employee : " +empno+ 
    " Project : pid= "+pid+", pname:"+pname+", location:"+ploc

    res.send(message)
    console.log(message)

})


//listen: Host the API on a specified Port (listen is an express method, not http method)
app.listen(port, () => {

 console.log('Mastek Employee app listening on port ${port}!');
 console.log("Service App Startup Logic");
})