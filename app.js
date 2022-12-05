import mongoose from "mongoose"
import express from 'express'
import UsersController from "./user/user-controller.js";
import cors from 'cors'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect("mongodb+srv://runhanshi:970329@cluster0.jexfynk.mongodb.net/?retryWrites=true&w=majority", options);

const app = express();
app.use(cors())
app.use(express.json())

UsersController(app)
app.listen(4000)


// import UserController from "./user/user-controller.js";
//
// import express from 'express';
// import cors from 'cors'
// import mongoose from "mongoose";
// const app = express();
//
// app.use(express.json());
//
// app.use(cors());
//
// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: false }));
//
//
//
//
//
// const JWT_SECRET =
//    "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
//
// const mongoUrl =
//     "mongodb+srv://runhanshi:970329@cluster0.jexfynk.mongodb.net/?retryWrites=true&w=majority";
//
// mongoose
//     .connect(mongoUrl, {
//         useNewUrlParser: true,
//     })
//     .then(() => {
//         console.log("Connected to database");
//     })
//     .catch((e) => console.log(e));
//
// ///require("./user/user-schema");
// import userSchema from "./user/user-schema";
// const User = mongoose.model("UserInfo");
//
// app.post("/register", async (req, res) => {
//     const { username, usertype, firstname, lastname, email, password } = req.body;
//
//     // const encryptedPassword = await bcrypt.hash(password, 10);
//     try {
//         const oldUser = await User.findOne({ username });
//
//         if (oldUser) {
//             return res.json({ error: "User Exists" });
//         }
//         await User.create({
//             username,
//             usertype,
//             firstname,
//             lastname,
//             email,
//             password,
//         });
//         res.send({ status: "ok" });
//     } catch (error) {
//         res.send({ status: "error" });
//     }
// });
//
// app.post("/login-user", async (req, res) => {
//     const { username, password } = req.body;
//
//     const user = await User.findOne({ username });
//     if (!user) {
//         return res.json({ error: "User Not found" });
//     }
//     if (password === user.password) {
//
//         // const token = jwt.sign({ username: user.username }, JWT_SECRET);
//
//         if (res.status(201)) {
//             return res.json({ status: "ok"});
//         } else {
//             return res.json({ error: "error" });
//         }
//     }
//     res.json({ status: "error", error: "InvAlid Password" });
// });
//
// UserController(app)

//
// app.post("/user", async (req, res) => {
//     const user = req.body;
//     try {
//         //const user = jwt.verify(token, JWT_SECRET);
//         console.log(user);
//
//         const username = user.username;
//         User.findOne({ username: username })
//             .then((data) => {
//                 res.send({ status: "ok", data: data });
//             })
//             .catch((error) => {
//                 res.send({ status: "error", data: error });
//             });
//     } catch (error) {}
// });


//
// app.post("/forgot-password", async (req, res) => {
//     const { email } = req.body;
//     try {
//         const oldUser = await User.findOne({ email });
//         if (!oldUser) {
//             return res.json({ status: "User Not Exists!!" });
//         }
//         const secret = JWT_SECRET + oldUser.password;
//         const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
//             expiresIn: "5m",
//         });
//         const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
//         var transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: "adarsh438tcsckandivali@gmail.com",
//                 pass: "rmdklolcsmswvyfw",
//             },
//         });
//
//         var mailOptions = {
//             from: "youremail@gmail.com",
//             to: "thedebugarena@gmail.com",
//             subject: "Password Reset",
//             text: link,
//         };
//
//         transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log("Email sent: " + info.response);
//             }
//         });
//         console.log(link);
//     } catch (error) {}
// });
//
// app.get("/reset-password/:id/:token", async (req, res) => {
//     const { id, token } = req.params;
//     console.log(req.params);
//     const oldUser = await User.findOne({ _id: id });
//     if (!oldUser) {
//         return res.json({ status: "User Not Exists!!" });
//     }
//     const secret = JWT_SECRET + oldUser.password;
//     try {
//         const verify = jwt.verify(token, secret);
//         res.render("index", { email: verify.email, status: "Not Verified" });
//     } catch (error) {
//         console.log(error);
//         res.send("Not Verified");
//     }
// });
//
// app.post("/reset-password/:id/:token", async (req, res) => {
//     const { id, token } = req.params;
//     const { password } = req.body;
//
//     const oldUser = await User.findOne({ _id: id });
//     if (!oldUser) {
//         return res.json({ status: "User Not Exists!!" });
//     }
//     const secret = JWT_SECRET + oldUser.password;
//     try {
//         const verify = jwt.verify(token, secret);
//         const encryptedPassword = await bcrypt.hash(password, 10);
//         await User.updateOne(
//             {
//                 _id: id,
//             },
//             {
//                 $set: {
//                     password: encryptedPassword,
//                 },
//             }
//         );
//
//
//         res.render("index", { email: verify.email, status: "verified" });
//     } catch (error) {
//         console.log(error);
//         res.json({ status: "Something Went Wrong" });
//     }
// });
// app.listen(4000, () => {
//    console.log("Server started");
// });