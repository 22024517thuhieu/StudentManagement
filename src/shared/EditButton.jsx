import { useNavigate } from "react-router"
import { Button } from "antd"
import { EditOutlined } from "@ant-design/icons"

export const EditButton = ({ record }) => {
    const navigate = useNavigate();
    return <Button onClick={() => navigate(`/students/edit`, { state: { student: record } })} icon={<EditOutlined />} shape="circle" />
}