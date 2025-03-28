import { useMutation } from "react-query";
import axios from "axios";
import { message } from "antd";

function formatDateToYYYYMMDD(isoString) {
    if (!isoString) return null;
    const date = new Date(isoString);
    return date.toISOString().split('T')[0]; // Extracts YYYY-MM-DD
}

export default function useUpdateStudent() {
    return useMutation(
        async ({ studentId, updatedData }) => {
            console.log(updatedData);
            
            return axios.put(`http://localhost:8069/odoo_controller/students/update/${studentId}`, {
                ...updatedData,
                dob: formatDateToYYYYMMDD(updatedData.dob)
            });
        },
        {
            onSuccess: () => console.log("Cập nhật thành công!"),
            onError: () => console.log("Cập nhật thất bại!"),
        }
    );
}
