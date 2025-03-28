import { Table, Button, Modal, Spin } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

import useModal from "../../hooks/useModal";
import useDeleteItems from "../../apis/useDeleteStudents";
import useUploadFile from "../../apis/useUploadFile";

import { ReturnButton } from "../../shared/ReturnButton";
import { EditButton } from "../../shared/EditButton";
import ImportButton from "./components/UploadButton";

const dataSource = [
    { key: "1", studentId: "22024517", name: "Nguyễn Văn A", dob: "01/01/2000", gender: "Nam", address: "Hà Nội", city: "Hà Nội", email: "a@gmail.com", class: "IT01", username: "nguyenvana" },
    { key: "2", studentId: "22024518", name: "Trần Thị B", dob: "02/02/2001", gender: "Nữ", address: "HCM", city: "HCM", email: "b@gmail.com", class: "IT02", username: "tranthib" },
    { key: "3", studentId: "22024519", name: "Phạm Văn C", dob: "03/03/2002", gender: "Nam", address: "Đà Nẵng", city: "Đà Nẵng", email: "c@gmail.com", class: "IT03", username: "phamvanc" },
];

export default function StudentImport() {
    const { isModalVisible, showModal, handleClose } = useModal();
    const useDeleteItemsMutation = useDeleteItems();
    const { data, isLoading } = useUploadFile();
    console.log(data);

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isImporting, setIsImporting] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const allColumns = [
        { key: "studentId", title: "Mã Sinh Viên", dataIndex: "studentId" },
        { key: "name", title: "Họ Tên", dataIndex: "name" },
        { key: "dob", title: "Ngày Sinh", dataIndex: "dob" },
        { key: "gender", title: "Giới Tính", dataIndex: "gender" },
        { key: "address", title: "Địa Chỉ", dataIndex: "address" },
        { key: "city", title: "Thành Phố", dataIndex: "city" },
        { key: "email", title: "Email", dataIndex: "email" },
        { key: "class", title: "Mã Lớp", dataIndex: "class" },
        { key: "username", title: "Tài Khoản", dataIndex: "username" },
        { key: "status", title: "Ghi Chú", dataIndex: "status", render: () => <span className="text-green-500">IMPORT THÀNH CÔNG</span> },
        {
            key: "actions",
            title: "Hành Động",
            render: (_, record) => (
                <div className="flex justify-center gap-2">
                    <Button onClick={showModal} icon={<DeleteOutlined style={{ color: "red" }} />} shape="circle" ></Button>
                    <EditButton record={record} />
                </div>
            ),
        },
    ];

    const deleteStudents = () => {
        // useDeleteItemsMutation.mutate(selectedRowKeys);
        handleClose();
    };

    return (
        <div className="m-4 p-4 shadow-md rounded-lg bg-white">
            <h2 className="text-lg font-semibold text-center mb-4 text-[#4C4E64DE]">Import dữ liệu theo mẫu</h2>
            <p className="text-center text-gray-500">Chọn xuất mẫu import hoặc tải lên file để import</p>

            <div className="flex justify-between items-center mt-4">
                <Button danger onClick={showModal}>Xóa dữ liệu đã chọn</Button>
                <div className="flex gap-2">
                    <ImportButton setIsImporting={setIsImporting} setShowResults={setShowResults} />
                    <Button className="border-green-500 text-green-500">Xuất Mẫu Import</Button>
                </div>
            </div>

            {/* Show loading spinner during import */}
            {isImporting && (
                <div className="flex justify-center mt-4">
                    <Spin size="large" />
                </div>
            )}

            {/* Show results after import is done */}
            {showResults && (
                <>
                    <p className="text-center mt-4">
                        Import thành công <span className="text-green-500 font-medium">04</span> bản ghi
                    </p>

                    <Table
                        className="mt-4"
                        columns={allColumns}
                        dataSource={dataSource}
                        rowSelection={{
                            selectedRowKeys,
                            onChange: setSelectedRowKeys,
                        }}
                        pagination={false}
                    />

                    <div className="flex justify-center mt-6">
                        <ReturnButton />
                    </div>
                </>
            )}

            <Modal
                title=" "
                open={isModalVisible}
                onOk={handleClose}
                onCancel={handleClose}
                footer={null}
                centered
            >
                <div className="flex flex-col items-center borde p-4 rounded-lg text-red-700">
                    {selectedRowKeys.length === 0
                        ? <p className="text-center">Vui lòng chọn dữ liệu để xóa</p>
                        : <>
                            <p>BẠN ĐỒNG Ý XÓA DỮ LIỆU ĐÃ CHỌN KHÔNG?</p>
                            <div className="flex gap-4 mt-4">
                                <Button className="bg-red-700! text-white! px-6" onClick={deleteStudents}>ĐỒNG Ý</Button>
                                <Button className="border text-red-700! px-6" onClick={handleClose}>KHÔNG</Button>
                            </div>
                        </>
                    }
                </div>
            </Modal>
        </div>
    );
}
