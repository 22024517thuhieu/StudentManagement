import React from "react";
import { Descriptions, Card, Button } from "antd";
import { EditOutlined, DeleteOutlined, PrinterOutlined, DownloadOutlined } from "@ant-design/icons";

import { useLocation } from "react-router";
import { ReturnButton } from "../../shared/ReturnButton";

const StudentDetails = () => {
  const location = useLocation();
  const student = location.state?.student;

  if (!student) return <p>Không có dữ liệu sinh viên.</p>;

  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <Card className="shadow-md w-full p-8!">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Chi tiết Sinh viên</h2>
          <div className="flex gap-2">
            <Button icon={<EditOutlined />} shape="square" size="large" style={{ background: "#4CAF50", color: "white" }} />
            <Button icon={<DeleteOutlined />} shape="square" size="large" style={{ background: "#4CAF50", color: "white" }} />
            <Button icon={<PrinterOutlined />} shape="square" size="large" style={{ background: "#4CAF50", color: "white" }} />
            <Button icon={<DownloadOutlined />} shape="square" size="large" style={{ background: "#4CAF50", color: "white" }} />
          </div>
        </div>
        <Descriptions bordered column={2}>
          <Descriptions.Item label="Mã sinh viên">{student.code}</Descriptions.Item>
          <Descriptions.Item label="Họ tên">{student.fullname}</Descriptions.Item>
          <Descriptions.Item label="Ngày sinh">{student.dob}</Descriptions.Item>
          <Descriptions.Item label="Giới tính">{student.sex}</Descriptions.Item>
          <Descriptions.Item label="Địa chỉ">{student.address}</Descriptions.Item>
          <Descriptions.Item label="Thành phố">{student.homecity}</Descriptions.Item>
          <Descriptions.Item label="Email">{student.email}</Descriptions.Item>
          <Descriptions.Item label="Số điện thoại">{student.phone_number}</Descriptions.Item>
          <Descriptions.Item label="Mã lớp học">{student.class}</Descriptions.Item>
          <Descriptions.Item label="Username">{student.username}</Descriptions.Item>
        </Descriptions>

        <div className="flex justify-end mt-4">
          <ReturnButton />
        </div>
      </Card>
    </div>
  );
};

export default StudentDetails;
