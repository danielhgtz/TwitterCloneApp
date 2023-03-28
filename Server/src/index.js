import express from "express";
import cors from "cors";

import { pool } from "./Database/DB.js";

const app = express();

app.use(express.json());
app.use(cors());

app.set("port", 5000);

app.post("tweet", (req, res) => {
  pool.query(
    "INSERTO INTO tweets (Tweet) VALUES (?)",
    [req.body],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    }
  );
});

app.listen(app.get("port"), () => {
  console.log(`app listening on port ${app.get("port")}`);

  pool.getConnection((error) => {
    if (error) throw error;
    console.log("Database connected");
  });
});
