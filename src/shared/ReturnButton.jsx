import { useNavigate } from "react-router";
import { Button } from "antd";

export const ReturnButton = () => {
    const navigate = useNavigate();
    return (
        <Button className="h-10!" onClick={() => navigate(-1)}>Trở về danh sách</Button>
    );
}