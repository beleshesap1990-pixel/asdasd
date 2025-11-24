import express from "express";
import request from "request";
import cors from "cors";

const app = express();
app.use(cors());

app.use("/", (req, res) => {
  const url = "https://play-cs.com" + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(3000, () => {
  console.log("Proxy aktif!");
});
