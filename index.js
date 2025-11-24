import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.use("/", async (req, res) => {
  const target = "https://play-cs.com" + req.url;

  try {
    const response = await fetch(target);
    const data = await response.text();

    res.send(data);
  } catch (err) {
    res.status(500).send("Proxy error: " + err.toString());
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Proxy running on " + port));

