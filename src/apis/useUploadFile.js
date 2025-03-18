import { useMutation } from "react-query";
import axios from "axios";
import { message } from "antd";

export default function useUploadFile() {
    return useMutation(
        async (file) => {
            const formData = new FormData();
            formData.append("file", file);

            return axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        },
        {
            onSuccess: () => message.success("File uploaded successfully!"),
            onError: () => message.error("Upload failed!"),
        }
    );
}
