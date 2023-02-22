const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3033;

app.post("/get_weather", async (req, res) => {
  const { url } = req.body;
  console.log("🚀 ~ file: index.js:13 ~ app.post ~ url", url);

  const response = await fetch(url, {
    method: "get",
  });
  console.log("🚀 ~ file: index.js:18 ~ app.post ~ response", response);
  if (response.status === 200) {
    const json = await response.json();
    res.status(200).send(json.result.addressMatches);
  } else {
    res.status(response.status).send(response);
  }
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
