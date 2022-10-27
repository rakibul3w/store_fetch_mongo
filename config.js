//Connection file to mongo db
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://random:HcQfXDvR2k86R9RD@node-mongo-server-1.pkxfn.mongodb.net/students?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
};

// database schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ID: { type: String, required: true },
    email: { type: String, required: true},
    mobile: { type: String, required: true },
    gender: String,
  },
  { timestamps: true }
);

const Student = new mongoose.model("Student", studentSchema);

module.exports = { Student, connectDB };