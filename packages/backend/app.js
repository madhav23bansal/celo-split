// app.js
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/sequelize");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, Sequelize Express MySQL!");
});

// Import and use userRoutes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database tables synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
