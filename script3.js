const nbs = require ("express")
let app = nbs()

function homePage(req, res){

    res.write("<h1> <center> My HomePage </h1>")
    res.write("<h2> List of departments </h1><br><br>")
    res.write(" <a href='http://localhost:3000/department/101'> Hr department</a>")
    res.write(" <a href='http://localhost:3000/department/102'> IT department</a>")
    res.write(" <a href='http://localhost:3000/department/103'> Sales department</a>")
}
function employeeList(req, res){
    let departmentName = " "

    if (req.params.dept==101){
        departmentName = "HR DEPARTMENT"
    }
    if (req.params.dept==102){
        departmentName = "IT DEPARTMENT"
    }
    if (req.params.dept==103){
        departmentName = "SALES DEPARTMENT"
    }

    res.write("<h1> <center>")
    res.write(departmentName)
    res.write(" </center> </h1>")
}

app.get("/",homePage)
app.get("/department/:dept",employeeList)

app.listen(3000)