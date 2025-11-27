import express from "express";

const app = express();
const port = 3458;

app.get("/chat", (req, res) => {
    console.log(req.body);
  res.send("Server chal raha hai! 🟢");
});

app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}/chat`);
});
