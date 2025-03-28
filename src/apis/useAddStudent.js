import { useMutation } from "react-query";
import axios from "axios";
import { message } from "antd";

function formatDateToYYYYMMDD(isoString) {
    if (!isoString) return null;
    const date = new Date(isoString);
    return date.toISOString().split('T')[0]; // Extracts YYYY-MM-DD
}


export default function useAddStudent() {
    return useMutation(
        async (newStudent) => {
            return axios.post(`http://localhost:8069/odoo_controller/students/add`, {
                ...newStudent,
                dob: formatDateToYYYYMMDD(newStudent.dob)
            });
        },
        {
            onSuccess: () => message.success("Thêm sinh viên thành công!"),
            onError: () => message.error("Thêm sinh viên thất bại!"),
        }
    );
}
