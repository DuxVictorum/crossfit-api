const { v4: uuid } = require("uuid");
const workout = require("../database/workout");

const getAllWorkouts = () => {
  const allWorkouts = workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = (workoutId) => {
  const workout = workout.getOneWorkout(workoutId);
  return workout;
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdWorkout = workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

const updateOneWorkout = (workoutId, changes) => {
  const updatedWorkout = workout.updateOneWorkout(workoutId, changes);
  return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
  workout.deleteOneWorkout(workoutId);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
