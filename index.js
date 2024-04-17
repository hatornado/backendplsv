const express = require('express');
const mongoose = require('mongoose');
const studentController = require('./controller/sinhvien.controller');
const app = express();
const PORT = process.env.PORT || 3000;


// Kết nối với MongoDB (thay đổi URL kết nối thành MongoDB của bạn)
mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


app.use(express.json());

// Tạo sinh viên mới
app.post('/api/students', studentController.createStudent);

// Lấy danh sách sinh viên
app.get('/api/students', studentController.getStudents);

// Lấy thông tin chi tiết của một sinh viên
app.get('/api/students/:id', studentController.getStudentById);

// Cập nhật thông tin của một sinh viên
app.put('/api/students/:id', studentController.updateStudent);

// Xóa một sinh viên
app.delete('/api/students/:id', studentController.deleteStudent);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
