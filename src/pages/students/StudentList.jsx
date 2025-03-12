import { useState } from "react";
import { Table, Button, Input, Dropdown, Menu, Spin, Modal } from "antd";
import { SearchOutlined, SettingOutlined, PlusOutlined, DownOutlined, DeleteOutlined, EditOutlined, EyeOutlined, MoreOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router";

import useModal from "../../hooks/useModal";

// import useStudentsQuery from "../../hooks/useQueryStudentList";

const students = Array.from({ length: 16 }, (_, index) => ({
  key: index + 1,
  code: index === 0 ? "22024517" : "MÃ SINH VIÊN",
  fullname: "HỌ TÊN",
  dob: "NGÀY SINH",
  sex: "GIỚI TÍNH",
  address: "ĐỊA CHỈ",
  homecity: "THÀNH PHỐ",
  email: "EMAIL",
  phone_number: "SỐ ĐIỆN THOẠI",
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
  const [pageSize, setPageSize] = useState(5);
  const onChangeSize = (_, pageSize) => {
    setPageSize(pageSize);
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };
  const {
    isModalVisible,
    showModal,
    handleOk,
    handleCancel,
  } = useModal();

  const navigate = useNavigate();

  const columns = [
    { title: "STT", dataIndex: "key" },
    { title: "MÃ SINH VIÊN", dataIndex: "code" },
    { title: "HỌ TÊN", dataIndex: "fullname" },
    { title: "NGÀY SINH", dataIndex: "dob" },
    { title: "GIỚI TÍNH", dataIndex: "sex" },
    { title: "ĐỊA CHỈ", dataIndex: "address" },
    { title: "THÀNH PHỐ", dataIndex: "homecity" },
    { title: "EMAIL", dataIndex: "email" },
    { title: "SỐ ĐIỆN THOẠI", dataIndex: "phone_number" },
    { title: "MÃ LỚP", dataIndex: "class" },
    {
      title: "HÀNH ĐỘNG",
      dataIndex: "actions",
      align: "center",
      width: "150px",
      render: (_, record) => {
        return (
          <div className="flex justify-center gap-2">
            <Button onClick={showModal} icon={<DeleteOutlined style={{ color: "red" }} />} shape="circle" ></Button>
            <Button onClick={() => navigate(`/students/edit`, { state: { student: record } })} icon={<EditOutlined />} shape="circle" />
            <Button onClick={() => navigate(`/students/details`, { state: { student: record } })} icon={<EyeOutlined />} shape="circle" />
            <Dropdown overlay={<Menu><Menu.Item key="1">Export</Menu.Item></Menu>} trigger={["click"]}>
              <Button icon={<MoreOutlined />} shape="circle" />
            </Dropdown>
          </div>
        )
      },
    },
  ];

  // const { students, isLoading } = useStudentsQuery();
  // if (isLoading) return <Spin/>

  return (
    <div className="bg-white m-4 p-4 shadow-md rounded-lg">
      <div className="flex mb-4 gap-2">
        <Dropdown overlay={menu}>
          <Button>Hành động <DownOutlined /></Button>
        </Dropdown>
        <div className="w-1/6 ml-auto">
          <Input placeholder="TỪ KHÓA" prefix={<SearchOutlined />} className="border-2 border-[#5A9F68] p-2 rounded-xl text-sm" />
        </div>
        <div className="flex space-x-1">
          <Button onClick={() => navigate("/students/new")} type="primary" icon={<PlusOutlined />} className="bg-[#5A9F68]!">THÊM MỚI</Button>
          <Button icon={<SettingOutlined style={{ color: "white" }} />} className="bg-[#5A9F68]!" />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={students}
        rowSelection={rowSelection}
        pagination={{ pageSize: pageSize, showSizeChanger: true, pageSizeOptions: ['5', '10', '20'], onChange: onChangeSize }}
      />
      <Modal
        title=" "
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <div className="flex flex-col items-center borde p-4 rounded-lg text-red-700">
          <p>BẠN ĐỒNG Ý XÓA DỮ LIỆU ĐÃ CHỌN KHÔNG?</p>
          <div className="flex gap-4 mt-4">
            <Button className="bg-red-700! text-white! px-6" onClick={handleOk}>ĐỒNG Ý</Button>
            <Button className="border text-red-700! px-6" onClick={handleCancel}>KHÔNG</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
