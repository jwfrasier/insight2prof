const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3033;

app.post("/get_weather", async (req, res) => {
  const { url } = req.body;
  const response = await fetch(url, {
    method: "get",
  });
  if (response.status === 200) {
    const json = await response.json();
    res.status(200).send(json);
  } else {
    res.status(response.status).send(response);
  }
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
