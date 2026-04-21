const Course = require("../models/courseModel");

// GET all courses
async function getAllCourses() {
  return await Course.find();
}

// GET course by ID
async function getCourseById(id) {
  return await Course.findById(id);
}

// CREATE new course
async function createCourse(data) {
  return await Course.create(data);
}

// UPDATE course
async function updateCourse(id, data) {
  return await Course.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
}

// DELETE course
async function deleteCourse(id) {
  return await Course.findByIdAndDelete(id);
}

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};