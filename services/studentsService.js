const students = require("../students.json");

function getAllStudents() {
  return students;
}

function getStudentById(id) {
  return students.find((s) => s.id === id);
}

module.exports = {
  getAllStudents,
  getStudentById,
};