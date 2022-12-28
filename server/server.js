const express = require("express");
const connectDB = require("./db/db")
const {graphqlHTTP} = require("express-graphql")
const schema = require("./qraphql/schema")
const cors = require("cors")
const PORT = 3010;
const app = express()

app.use(cors())
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
}))

connectDB();
app.listen(PORT, ()=>{
    console.log(`app start on port - ${PORT}`)
})