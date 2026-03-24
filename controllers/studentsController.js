const service = require("../services/studentsService");

function getStudents(req, res) {
  const students = service.getAllStudents();
  res.json(students);
}

function getStudent(req, res) {
  const id = parseInt(req.params.id);
  const student = service.getStudentById(id);

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  res.json(student);
}

function createStudent(req, res) {
  res.status(201).json({ message: "Student created" });
}

function updateStudent(req, res) {
  res.status(200).json({ message: "Student updated" });
}

function deleteStudent(req, res) {
  res.status(200).json({ message: "Student deleted" });
}

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};