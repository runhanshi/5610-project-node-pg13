import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true },
        usertype: String,
        firstname: String,
        lastname: String,
        email: String,
        phone: String,
        dateofbirth: Date,
        password: String,
    },
    {
        collection: "UserInfo",
        versionKey: false,
    }
);

mongoose.model("UserInfo", userSchema);
export default userSchema;