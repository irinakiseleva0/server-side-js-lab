const courseService = require("../services/courseService");
// GET all
async function getAll(req, res) {
  try {
    const courses = await courseService.getAllCourses();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// GET by ID
async function getById(req, res) {
  try {
    const course = await courseService.getCourseById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// CREATE
async function create(req, res) {
  try {
    const newCourse = await courseService.createCourse(req.body);
    return res.status(201).json(newCourse);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

// UPDATE
async function update(req, res) {
  try {
    const updatedCourse = await courseService.updateCourse(req.params.id, req.body);

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    return res.status(200).json(updatedCourse);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

// DELETE
async function remove(req, res) {
  try {
    const deletedCourse = await courseService.deleteCourse(req.params.id);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    return res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};