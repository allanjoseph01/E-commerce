// import { getJSON, timers } from "jquery";
// const { default: mongoose } = require("mongoose");
import {mongoose} from "mongoose";
// const bcrypt = require("bcrypt");
import {bcrypt} from "bcrypt"

let userSchema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        email: {
            type: String,
            required: true,
            unique: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        },
        age: {
            type: Number,
            min: 18,
            max: 65,
        },
        role: { type: String, enum: ["admin", "user"], default: "user" },
        password: { type: String, required: true, minlength: 8, select: false },
    },
    { timestamps: true },
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {  
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);
});


let User = mongoose.model("User", userSchema)
export default User

// Server - DB - Tables
// Cluster - DB - collections
