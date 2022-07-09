const { v4: uuid } = require("uuid");
const workout = require("../database/workout");

const getAllWorkouts = () => {
  const allWorkouts = workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = () => {
  return;
};

const createNewWorkout = () => {
  const workoutToInsert = {
    ...createNewWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleDateString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleDateString("en-US", { timeZone: "UTC" }),
  };
  const createdWorkout = workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
