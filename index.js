const express = require("express");
const dotenv = require ("dotenv");
const path = require("path");
const { connectDB } = require("./lib/connectiondb");
const  route  = require("./routes/userroute");
const  staticRoute  = require("./routes/staticRoute");
// const URL = require("./models/usermodel");



const app = express();
const PORT = 8000;
dotenv.config();

// setting view engine for rendering html pages
app.set("view engine", "ejs");
app.set("views", path.resolve('./views'));
app.use(express.static(path.resolve(__dirname, "./public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", route);
app.use("/", staticRoute);

// app.get("/home", async (req, res) => {
//     const allurls = await URL.find({});
//     res.render("home", {urls: allurls});
// })

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
    connectDB();
})