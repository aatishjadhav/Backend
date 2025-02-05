const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    description: String,
    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
    },
    dueDate: Date,
    completed: {
        type: Boolean,
        default: false,
    },
    tags: [
        {
            type: String,
        },
    ],
}, { timestamps: true },);

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;