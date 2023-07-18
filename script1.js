const nbs = require ("express")
let app = nbs()

function qaFunction (request,response){

    response.send("Helllo and Welcome")
}

app.get("/nbs", function (request,response){

    response.send("very hot today")
})

app.get("/qa1", qaFunction )
app.get("/qa2", qaFunction)

app.listen(3000)
