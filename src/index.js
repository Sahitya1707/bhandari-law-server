const express = require("express");
const { PORT } = require("./configs/configuration");
const { json } = require("body-parser");
const expressSession = require("express-session");
const cors = require("cors");
// const bodyParser = require("body-parser");
const path = require("path");
const databaseConnection = require("./db_connection/db_connection");
const sliderRoute = require("./routes/slider_route");
const metaRoute = require("./routes/meta_tag_route");
const commentRoute = require("./routes/comment_route");
const aboutRoute = require("./routes/about_route");
const teamRoute = require("./routes/team_route");
const blogRoute = require("./routes/blog_route");
const serviceRoute = require("./routes/service_route");
const publicationRoute = require("./routes/publication_route");

const app = express();

databaseConnection();

require("dotenv").config();

app.set("trust proxy", true);
// app.use(bodyParser.json());
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
app.use("/api/comment", commentRoute);
app.use("/api/about", aboutRoute);
app.use("/api/team", teamRoute);
app.use("/api/blog", blogRoute);
app.use("/api/service", serviceRoute);
app.use("/api/publication", publicationRoute);

// app.use("/api/meta", metaRoute);
app.use("/upload", express.static(path.join(__dirname, "upload")));

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

app.all("*", async (req, res) => {
  return res.status(201).send({ message: "invalid routes" });
});
