const mongoose = require('mongoose');

// Định nghĩa schema cho sinh viên
const studentSchema = new mongoose.Schema({
  maSV: {
    type: String,
    required: true
  },
  hoTen: {
    type: String,
    required: true
  },
  cmnd: {
    type: String,
    required: true
  },
  soDienThoai: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Đảm bảo email là duy nhất
  },
  diemToan: {
    type: Number,
    required: true
  },
  diemLy: {
    type: Number,
    required: true
  },
  diemHoa: {
    type: Number,
    required: true
  },
  diemTB: {
    type: Number,
    required: true
  },
  xepLoai: {
    type: String,
    required: true
  }
});

// Tạo model từ schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;