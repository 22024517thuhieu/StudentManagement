import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

import { message } from "antd";

export default function useDeleteItems() {
    const queryClient = useQueryClient();

    return useMutation(
        async (ids) => {
            return axios.delete("http://localhost:8069/odoo_controller/students/mass_delete", {
                data: { student_ids: ids }, // Sending selected IDs in the request body
            });
        },
        {
            onSuccess: () => queryClient.invalidateQueries('students'),
            onError: () => message.error("Failed to delete!"),
        }
    );
}
