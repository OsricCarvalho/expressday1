const nbs = require ("express")
let app = nbs()

function addition(request,response) {

    let numberOne = parseInt(request.params.A)
    let numberTwo =parseInt(request.params.A)
    let result = numberOne + numberTwo
    response.send ("the result is " + result)
}

app.get("/add/:A/:B", addition)


app.listen(3000)
