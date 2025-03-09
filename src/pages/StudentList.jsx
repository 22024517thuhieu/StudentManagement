import { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const students = [
  { id: 1, code: "22024517", name: "HỌ TÊN", dob: "NGÀY SINH", gender: "GIỚI TÍNH", address: "ĐỊA CHỈ", city: "THÀNH PHỐ", email: "EMAIL", class: "MÃ LỚP", account: "TÀI KHOẢN" },
  { id: 2, code: "MÃ SINH VIÊN", name: "HỌ TÊN", dob: "NGÀY SINH", gender: "GIỚI TÍNH", address: "ĐỊA CHỈ", city: "THÀNH PHỐ", email: "EMAIL", class: "MÃ LỚP", account: "TÀI KHOẢN" },
  { id: 3, code: "MÃ SINH VIÊN", name: "HỌ TÊN", dob: "NGÀY SINH", gender: "GIỚI TÍNH", address: "ĐỊA CHỈ", city: "THÀNH PHỐ", email: "EMAIL", class: "MÃ LỚP", account: "TÀI KHOẢN" },
  { id: 4, code: "MÃ SINH VIÊN", name: "HỌ TÊN", dob: "NGÀY SINH", gender: "GIỚI TÍNH", address: "ĐỊA CHỈ", city: "THÀNH PHỐ", email: "EMAIL", class: "MÃ LỚP", account: "TÀI KHOẢN" },
];

export default function StudentList() {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-[#5A9F68] p-3 text-white font-bold flex space-x-4">
        <button className="focus:outline-none">QUẢN LÝ SINH VIÊN</button>
        <button className="focus:outline-none">QUẢN LÝ LỚP</button>
      </div>
      <div className="bg-green-100 p-3 my-2">QUẢN LÝ SINH VIÊN</div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <input type="text" placeholder="TỪ KHÓA" className="border p-2 rounded w-1/3" />
          <button className="bg-green-500 text-white px-4 py-2 rounded">THÊM MỚI</button>
        </div>
        <table className="w-full border-collapse border rounded-lg text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2"><input type="checkbox" /></th>
              <th className="p-2">STT</th>
              <th className="p-2">MÃ SINH VIÊN</th>
              <th className="p-2">HỌ TÊN</th>
              <th className="p-2">NGÀY SINH</th>
              <th className="p-2">GIỚI TÍNH</th>
              <th className="p-2">ĐỊA CHỈ</th>
              <th className="p-2">THÀNH PHỐ</th>
              <th className="p-2">EMAIL</th>
              <th className="p-2">MÃ LỚP</th>
              <th className="p-2">TÀI KHOẢN</th>
              <th className="p-2">HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className="border-t">
                <td className="p-2 text-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(student.id)}
                    onChange={() => toggleSelect(student.id)}
                  />
                </td>
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{student.code}</td>
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.dob}</td>
                <td className="p-2">{student.gender}</td>
                <td className="p-2">{student.address}</td>
                <td className="p-2">{student.city}</td>
                <td className="p-2">{student.email}</td>
                <td className="p-2">{student.class}</td>
                <td className="p-2">{student.account}</td>
                <td className="p-2 flex space-x-2">
                  <button className="text-blue-500"><FaEye /></button>
                  <button className="text-green-500"><FaEdit /></button>
                  <button className="text-red-500"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
