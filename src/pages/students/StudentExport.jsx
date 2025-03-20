import React from "react";
import { Table, Button, Dropdown } from "antd";
import { PrinterOutlined, DownOutlined } from "@ant-design/icons";
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

const exportOptions = [
    { key: "pdf", label: "pdf" },
    { key: "xlsx", label: "xlsx" },
    { key: "csv", label: "csv" },
    { key: "docx", label: "docx" },
    { key: "json", label: "json" },
    { key: "xml", label: "xml" },
];

const StudentExport = () => {

    const handleExport = ({ key }) => {
        console.log("Exporting as:", key);
        // Add your export logic here
    };

    return (
        <div className="m-4 p-4 shadow-md rounded-lg bg-white">
            <h2 className="text-lg font-semibold text-center mb-4 text-[#4C4E64DE]">Export dữ liệu theo mẫu</h2>
            <p className="text-center text-gray-500">Chọn bộ lọc phù hợp, hệ thống sẽ hiển thị bản xem trước</p>

            <div className="flex justify-center gap-3 mt-4">
                <Button type="primary" className="bg-[#5A9F68]! flex items-center ml-auto" icon={<PrinterOutlined />}>
                    In Mẫu
                </Button>
                <div className="flex">
                    <Button type="primary" className="bg-[#5A9F68]! rounded-r-none! hover:cursor-default! border-r-2 border-r-gray-500!">
                        Xuất Dữ Liệu Mặc Định
                    </Button>
                    <Dropdown
                        menu={{ items: exportOptions, onClick: handleExport }}
                        trigger={["click"]}
                        placement="bottomLeft"
                    >
                        <Button type="primary" className="bg-[#5A9F68]! rounded-l-none! px-3">
                            <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            </div>

            <Table className="my-4" columns={columns} dataSource={data} pagination={false} bordered />

            <div className="flex justify-center mt-6">
                <ReturnButton />
            </div>
        </div>
    );
};

export default StudentExport;
