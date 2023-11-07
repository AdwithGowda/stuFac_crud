const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    branch: String
});
module.exports = mongoose.model("Student", studentSchema);