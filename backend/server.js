import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import emailValidator from "email-validator";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/todolist")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  CompanyName: { type: String, required: true },
  Companyemail: { type: String, required: true, unique: true },
  Employeesize: { type: String, required: true },
});

const userModel = new mongoose.model("users", userSchema);

app.post("/adduser", async (req, res) => {
  const { name, phn, org, email, size } = req.body;

  if (!emailValidator.validate(email)) {
    return res.status(404).json({ message: "Invalid email format" });
  }

  try {
    const existingUser = await userModel.findOne({ Companyemail: email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    existingUser = await userModel.findOne({ phone: phn });
    if (existingUser) {
      return res.status(400).json({ message: "Phone number already exists" });
    }

    const newUser = await userModel.create({
      name,
      phone: phn,
      CompanyName: org,
      Companyemail: email,
      Employeesize: size,
    });

    return res.status(201).json({
      message: "User added successfully",
      user: newUser,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.post("/sendEmail", (req, res) => {
  const { otp, email } = req.body;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "dnreply20@gmail.com",
      pass: "",
    },
  });
  const mailOptions = {
    from: "dnreply20@gmail.com",
    to: email,
    subject: "Verification OTP",
    text: `Your verification OTP is ${otp}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    } else {
      res.status(201).json({ message: "Email sent successfully" });
    }
  });
});

app.listen(port, (req, res) => {
  console.log(`Listening on http://localhost:${port}`);
});
