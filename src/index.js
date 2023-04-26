const express = require("express");
const { PORT } = require("./configs/configuration");
const { json } = require("body-parser");
const expressSession = require("express-session");
const cors = require("cors");
const path = require("path");
const databaseConnection = require("./db_connection/db_connection");
const sliderRoute = require("./routes/slider_route");
const metaRoute = require("./routes/meta_tag_router");

const app = express();

databaseConnection();

require("dotenv").config();

app.set("trust proxy", true);
app.use(json());
app.use(cors());
app.use(
  expressSession({
    secret: "somethingsecretgoeshere",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// const adminRouter = require("./routes/adminauth_route");

// app.use("/api/admin", adminRouter);
app.use("/api/slider", sliderRoute);
app.use("/api/meta", metaRoute);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

app.all("*", async (req, res) => {
  return res.status(201).send({ message: "invalid routes" });
});
