const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// MongoDB Configuration
mongoose.connect('mongodb://127.0.0.1:27017/student_results')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const ResultSchema = new mongoose.Schema({
    marks: [Number],
    total: Number,
    percentage: String,
    grade: String,
    date: { type: Date, default: Date.now }
});

const Result = mongoose.model('Result', ResultSchema);

// Step 1: Calculate total
function calculateTotal(marks, callback) {
    let total = marks.reduce((a, b) => a + b, 0);
    callback(total);
}

// Step 2: Calculate percentage
function calculatePercentage(total, callback) {
    let percentage = (total / 500) * 100;
    callback(percentage);
}

// Step 3: Assign grade
function assignGrade(percentage, callback) {
    let grade;

    if (percentage >= 75) grade = "A";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 50) grade = "C";
    else grade = "Fail";

    callback(grade);
}

// API route
app.post("/result", (req, res) => {
    let marks = req.body.marks;

    calculateTotal(marks, (total) => {
        calculatePercentage(total, (percentage) => {
            assignGrade(percentage, async (grade) => {
                
                const percentageFormatted = percentage.toFixed(2);
                
                // Save to MongoDB
                const newResult = new Result({
                    marks: marks,
                    total: total,
                    percentage: percentageFormatted,
                    grade: grade
                });
                
                try {
                    await newResult.save();
                    console.log("Result saved to database:", newResult);
                } catch (err) {
                    console.error("Error saving to database:", err);
                }

                res.json({
                    total,
                    percentage: percentageFormatted,
                    grade
                });
            });
        });
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
