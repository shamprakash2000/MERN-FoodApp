const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;
console.log(process.env.MONGODB_URL);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});


const schemaProduct = mongoose.Schema({
    name:String,
    category:String,
    image:String,
    price:String,
    description:String
})

const userModel = mongoose.model("user", userSchema);
const productModel = mongoose.model("product",schemaProduct)




app.get("/", (req, res) => {
  res.send("server running");
});

app.post("/signup", async (req, res) => {
  const { email } = req.body;
  const ans = await userModel.findOne({ email: email }).exec();
  if (ans === null) {
    const data = userModel(req.body);
    const save = data.save();
    res.send({ message: "Successfully signed up", alert: true });
  } else {
    res.send({ message: "email id already exist", alert: false });
  }
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  const ans = await userModel.findOne({ email: email }).exec();
  if (ans === null) {
    res.send({ message: "Enter proper credentials", alert: false });
  } else {
    ans.password = "";
    res.send({ message: "Logedin successfully", alert: true, data: ans });
  }
});
app.post("/uploadProduct",async(req,res)=>{
    console.log(req.body);
    const data=await productModel(req.body)
    const dataSave=data.save()
    res.send({ message: "Product uploaded successfully"});
})

app.get("/product",async (req,res)=>{
    const data =await productModel.find({})
    res.send(JSON.stringify(data))
})

app.listen(PORT, () => console.log("server running at port: " + PORT));
