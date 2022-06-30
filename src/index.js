const express = require("express");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

// For initial testing purposes only
app.get("/", (req, res) => {
  res.send("<h2>It seems to be working!</h2>");
});

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}.`);
});
