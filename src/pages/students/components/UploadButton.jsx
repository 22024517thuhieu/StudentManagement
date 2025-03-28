import { useRef } from "react";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import useUploadFile from "../../../apis/useUploadFile";

export default function ImportButton({ setIsImporting, setShowResults }) {
    const fileInputRef = useRef(null);
    const uploadFileMutation = useUploadFile();

    // Handle file selection
    const handleFileChange = async (event) => {
        setIsImporting(true);
        setShowResults(false);
        // const file = event.target.files[0];
        // if (file) {
        //     await uploadFileMutation.mutateAsync(file);
        // }
        setTimeout(() => {
            setIsImporting(false);
            setShowResults(true);
        }, 2000); // Simulate import process
    };

    const menu = (
        <Menu>
            <Menu.Item onClick={() => fileInputRef.current.click()}>
                Import mặc định(xslx)
            </Menu.Item>
        </Menu>
    );


    return (
        <div>
            {/* Hidden file input */}
            <input type="file" ref={fileInputRef} hidden accept=".xls,.xlsx" onChange={handleFileChange} />

            <Dropdown overlay={menu} trigger={["click"]}>
                <Button
                    type="primary"
                    className="bg-[#5A9F68]!"
                    icon={<DownOutlined />}
                    loading={uploadFileMutation.isLoading}
                >
                    Import Dữ Liệu
                </Button>
            </Dropdown>
        </div>
    );
}
