const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let port = 3000 
const users = [
{
    id:1,
    nom:"sabour",
    prenom:" mht",
    age:5,
},
{
    id:2,
    nom:"yahya ",
    prenom:" mht",
    age:3,


},
{
    id:3,
    nom:"LOUGMAN",
    prenom:" mht",
    age:1,


},
{
    id:4,
    nom:"FATIME",
    prenom:" mht",
    age:6,


}

]

const getusers =( req, res) => {
    res.status(200).json(users)
}
const adduser =(req,res)=>{
    const userData = req.body
    const index= users.findIndex(user => user.id == req.body.id );
if (index == -1) {
    users.push(userData);
    res.status(200).json(users)
} else {
    res.status(404).json(
        {
            message:"l'utilsateur n'existe pas "

        }
    )
    
}
}

app.use(bodyParser.json({
    limit:"50mb"


}))


app.use(bodyParser.urlencoded({
    limit:"50mb", extended:true
}))

const deletuser =(req,res) => {
    const userId = req.params.id
    const userIndex = users.findIndex(user => user.id==userId )
    console.log(userIndex)
    if (userIndex > 0 ) {
        users.splice(userIndex,1)
        res.stauts(200).json(users)
    } else {
        res.status(404).json(
            {
                message:"l'utilisateur n'existe pas "
            }
        )
    }
}


app.post('/api/users',adduser)
app.get('/api/users',getusers)
app.delete('/api/user/:id',deletuser)
app.listen(port, () => {
    
    console.log(`le serveur nous ecoute sur le port: ${port}`);
})