import { useState } from "react";
import { Table, Button, Input, Dropdown, Menu, Space, Select } from "antd";
import { SearchOutlined, SettingOutlined, PlusOutlined, DownOutlined } from "@ant-design/icons";

const { Option } = Select;

const students = Array.from({ length: 16 }, (_, index) => ({
  key: index + 1,
  code: index === 0 ? "22024517" : "MÃ SINH VIÊN",
  name: "HỌ TÊN",
  dob: "NGÀY SINH",
  gender: "GIỚI TÍNH",
  address: "ĐỊA CHỈ",
  city: "THÀNH PHỐ",
  email: "EMAIL",
  phone: "SỐ ĐIỆN THOẠI",
  class: "MÃ LỚP",
}));

const menu = (
  <Menu>
    <Menu.Item key="1">Nhập dữ liệu từ file</Menu.Item>
    <Menu.Item key="2">Xuất dữ liệu theo mẫu</Menu.Item>
    <Menu.Item key="3">Xóa dữ liệu đã chọn</Menu.Item>
  </Menu>
);

export default function StudentList() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pageSize, setPageSize] = useState();

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const columns = [
    { title: "STT", dataIndex: "key" },
    { title: "MÃ SINH VIÊN", dataIndex: "code" },
    { title: "HỌ TÊN", dataIndex: "name" },
    { title: "NGÀY SINH", dataIndex: "dob" },
    { title: "GIỚI TÍNH", dataIndex: "gender" },
    { title: "ĐỊA CHỈ", dataIndex: "address" },
    { title: "THÀNH PHỐ", dataIndex: "city" },
    { title: "EMAIL", dataIndex: "email" },
    { title: "SỐ ĐIỆN THOẠI", dataIndex: "phone" },
    { title: "MÃ LỚP", dataIndex: "class" },
  ];
  const onChangeSize = (_, pageSize) => {
    setPageSize(pageSize);
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-[#5A9F68] p-3 text-white font-medium flex space-x-4">
        <button className="focus:outline-none">HOME</button>
        <button className="focus:outline-none">QUẢN LÝ SINH VIÊN</button>
        <button className="focus:outline-none">QUẢN LÝ LỚP</button>
      </div>
      <div className="bg-[#DBF3C9] p-3 my-2 underline text-sm font-medium">QUẢN LÝ SINH VIÊN</div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex mb-4 gap-2">
          <Dropdown overlay={menu}>
            <Button>Hành động <DownOutlined /></Button>
          </Dropdown>
          <div className="w-1/6 ml-auto">
            <Input placeholder="TỪ KHÓA" prefix={<SearchOutlined />} className="border-2 border-[#5A9F68] p-2 rounded-xl text-sm" />
          </div>
          <div className="flex space-x-2">
            <Button type="primary" icon={<PlusOutlined />} className="bg-[#5A9F68]!">THÊM MỚI</Button>
            <Button icon={<SettingOutlined style={{ color: "white" }} />} className="bg-[#5A9F68]!" />
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={students}
          rowSelection={rowSelection}
          pagination={{ pageSize: pageSize, showSizeChanger: true, pageSizeOptions: ['5', '10', '20'], onChange: onChangeSize }}
        />
      </div>
    </div>
  );
}