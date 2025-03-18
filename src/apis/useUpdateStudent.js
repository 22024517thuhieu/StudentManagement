import { useMutation } from "react-query";
import axios from "axios";
import { message } from "antd";

export default function useUpdateStudent() {
    return useMutation(
        async ({ studentId, updatedData }) => {
            return axios.put(`https://jsonplaceholder.typicode.com/users/${studentId}`, updatedData);
        },
        {
            onSuccess: () => message.success("Cập nhật thành công!"),
            onError: () => message.error("Cập nhật thất bại!"),
        }
    );
}
