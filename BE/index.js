import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://tarana:tarana@cluster0.3mtaoul.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"))

const featuredSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String
});
const Clothing = mongoose.model("Clothing", featuredSchema);

app.get("/clothing", async (req, res) => {
  const data = await Clothing.find();
  res.send(data);
});
app.get("/clothing/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Clothing.findById(id);
  res.send(data);
});
app.delete("/clothing/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Clothing.findByIdAndDelete(id);
  res.send(data);
});
app.post("/clothing", async (req, res) => {
  const { body } = req;
  const data = await Clothing.create(body);
  res.send(data);
});
app.put("/clothing/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const data = await Clothing.findByIdAndUpdate(id, body);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
