import { useMutation } from "react-query";
import axios from "axios";
import { message } from "antd";

export default function useAddStudent() {
    return useMutation(
        async (newStudent) => {
            return axios.post(`https://jsonplaceholder.typicode.com/users`, newStudent);
        },
        {
            onSuccess: () => message.success("Thêm sinh viên thành công!"),
            onError: () => message.error("Thêm sinh viên thất bại!"),
        }
    );
}
