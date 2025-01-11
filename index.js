import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";  

dotenv.config();  

const app = express();
const port = 3000;

// Initialize PostgreSQL client
const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


db.connect()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error", err.stack));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];


app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM items ORDER BY id ASC");
    items = result.rows;

    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items, 
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching items from the database");
  }
});


app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding item to the database");
  }
});


app.post("/edit", async (req, res) => { 
  const updateitem = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;

  try {
    await db.query("UPDATE items SET title = ($1) WHERE id = ($2)", [updateitem, id]);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating item in the database");
  }
});


app.post("/delete", async (req, res) => { 
  const id = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM items WHERE id = $1", [id]);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting item from the database");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
