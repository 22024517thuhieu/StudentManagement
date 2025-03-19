import { useMutation } from "react-query";
import axios from "axios";

export default function useUploadFile() {
    return useMutation(
        async (file) => {
            const formData = new FormData();
            formData.append("file", file);

            return axios.post("http://localhost:8069//api/upload_students", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        },
        {
            onSuccess: (response) => console.log(response),
            onError: (err) => console.log(err)
            ,
        }
    );
}
