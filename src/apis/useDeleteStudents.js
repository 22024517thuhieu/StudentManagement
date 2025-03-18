import { useMutation } from "react-query";
import axios from "axios";
import { message } from "antd";

export default function useDeleteItems() {
    return useMutation(
        async (ids) => {
            return axios.delete("https://jsonplaceholder.typicode.com/posts", {
                data: { ids }, // Sending selected IDs in the request body
            });
        },
        {
            onSuccess: () => message.success("Deleted successfully!"),
            onError: () => message.error("Failed to delete!"),
        }
    );
}
