const {Client} =require("pg")
const client=new Client({
    user: "postgres",
    password:"*",
    host:"localhost",
    port:5432,
    database:"MealR"
})

client.connect()
.then(()=>console.log("Connected Succesfully"))
.then(()=>client.query("select * from recipes where meal_id = $1",["2"]))
.then(results => console.table(results.rows))
.catch(e => console.log)
.finally(()=>client.end())
