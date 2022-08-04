// Code from the project website:
// https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/

const express = require("express");
const bodyParser = require("body-parser");
const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SWaggerDocs } = require("./v1/swagger");

const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

// For initial testing purposes only
app.get("/", (req, res) => {
  res.send("<h2>It seems to be working!</h2>");
});

app.use(bodyParser.json());
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}.`);
  V1SWaggerDocs(app, PORT);
});
