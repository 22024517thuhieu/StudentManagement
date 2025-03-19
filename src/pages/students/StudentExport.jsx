import React from "react";
import { Table, Button } from "antd";
import { PrinterOutlined, DownOutlined, FilterOutlined } from "@ant-design/icons";
import { ReturnButton } from "../../shared/ReturnButton";

const data = [
    { key: 1, studentId: "22024517", name: "Họ Tên", birthDate: "Ngày Sinh", gender: "Giới Tính", address: "Địa Chỉ", city: "Thành Phố", email: "Email", phone: "Số Điện Thoại", classCode: "Mã Lớp" },
    { key: 2, studentId: "Mã Sinh Viên", name: "Họ Tên", birthDate: "Ngày Sinh", gender: "Giới Tính", address: "Địa Chỉ", city: "Thành Phố", email: "Email", phone: "Số Điện Thoại", classCode: "Mã Lớp" },
    { key: 3, studentId: "Mã Sinh Viên", name: "Họ Tên", birthDate: "Ngày Sinh", gender: "Giới Tính", address: "Địa Chỉ", city: "Thành Phố", email: "Email", phone: "Số Điện Thoại", classCode: "Mã Lớp" },
    { key: 4, studentId: "Mã Sinh Viên", name: "Họ Tên", birthDate: "Ngày Sinh", gender: "Giới Tính", address: "Địa Chỉ", city: "Thành Phố", email: "Email", phone: "Số Điện Thoại", classCode: "Mã Lớp" },
];

const columns = [
    { title: "STT", dataIndex: "key", key: "key" },
    { title: "MÃ SINH VIÊN", dataIndex: "studentId", key: "studentId" },
    { title: "HỌ TÊN", dataIndex: "name", key: "name" },
    { title: "NGÀY SINH", dataIndex: "birthDate", key: "birthDate" },
    { title: "GIỚI TÍNH", dataIndex: "gender", key: "gender" },
    { title: "ĐỊA CHỈ", dataIndex: "address", key: "address" },
    { title: "THÀNH PHỐ", dataIndex: "city", key: "city" },
    { title: "EMAIL", dataIndex: "email", key: "email" },
    { title: "SỐ ĐIỆN THOẠI", dataIndex: "phone", key: "phone" },
    { title: "MÃ LỚP", dataIndex: "classCode", key: "classCode" },
];

const StudentExport = () => {
    return (
        <div className="m-4 p-4 shadow-md rounded-lg bg-white">
            {/* Header */}
            <h2 className="text-lg font-semibold text-center mb-4 text-[#4C4E64DE]">Export dữ liệu theo mẫu</h2>
            <p className="text-center text-gray-500">Chọn bộ lọc phù hợp, hệ thống sẽ hiển thị bản xem trước</p>

            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-4">
                <Button type="primary" className="bg-[#5A9F68] flex items-center" icon={<PrinterOutlined />}>
                    In Mẫu
                </Button>
                <Button type="primary" className="bg-[#5A9F68] flex items-center" icon={<DownOutlined />}>
                    Xuất Dữ Liệu Mặc Định
                </Button>
                <Button type="default" icon={<FilterOutlined />} className="border-gray-300 text-gray-600" />
            </div>

            {/* Table */}
            <div className="mt-6">
                <Table columns={columns} dataSource={data} pagination={false} bordered />
            </div>

            <ReturnButton />
        </div>
    );
};

export default StudentExport;
