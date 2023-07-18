const nbs = require ("express")
let app = nbs()

function doSomething(request,response){

    response.send("Helllo and Welcome")
}

function manchester(request,response){

    response.send("very hot today")
}

app.get("/nbs", doSomething)
app.get("/qa", manchester)

app.listen(3000)

