const Student = require('../models/sinhvien.model'); // Import model sinh viên

// Controller để tạo một sinh viên mới
exports.createStudent = async (req, res) => {
  console.log(req,res)
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller để lấy danh sách sinh viên
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Controller để lấy thông tin chi tiết của một sinh viên
exports.getStudentById = async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).send({ message: 'Sinh viên không tồn tại' });
    }
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Controller để cập nhật thông tin của một sinh viên
exports.updateStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
    if (!student) {
      return res.status(404).send({ message: 'Sinh viên không tồn tại' });
    }
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Controller để xóa một sinh viên
exports.deleteStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).send({ message: 'Sinh viên không tồn tại' });
    }
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};
