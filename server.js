const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json()); // To handle JSON body in requests

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/api/auth", (req, res) => {
    const { username, password } = req.body;

    const data = "Username: " + username + " Password: " + password;

    return res.json({ message: data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
