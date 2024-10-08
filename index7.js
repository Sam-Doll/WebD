import express from "express";
import bodyParser from "body-parser";
import pg from "pg",

const db = new pg.Client({
  user:"username",
  host:"localhost",
  database:"mydatabase",
  password:"Pass",
  port:5432,
});

const app = express();
const port = 3000;

db.connect();

const result = await db.query(
  "<your sql command>"
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
