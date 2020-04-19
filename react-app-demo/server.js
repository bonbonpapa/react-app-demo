let express = require("express");
let app = express();

app.use("/", express.static("build"));

app.all("/*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

const { PORT = 4000, LOCAL_ADDRESS = "0.0.0.0" } = process.env;

app.listen(PORT, LOCAL_ADDRESS, () => {
  console.log("app running on port, ", PORT);
});
