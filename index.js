const express = require("express");
const knex = require("knex");
const app = express();
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);
app.use(express.json()); // for
// parse requests of content-type - application/
app.use(express.urlencoded({ extended: true })); // for
// parse requests of content-type - application/x-www-form-urlencoded

app.get("/", async (req, res) => {
  const todos = await db("todos").select("*");
  return res.send(todos);
});
app.post("/insert", (req, res) => {
  const { name } = req.body;
  db("test")
    .insert({ name: name })
    .then((data) => {
      return res.send("Inserted Successfully");
    });
});
app.get("/message", (req, res) => {
  return res.send("Message");
});

exports.app = app;
