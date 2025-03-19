import { useQuery } from "react-query";
import axios from "axios";

const fetchStudents = async () => {
    const response = await axios.get('http://localhost:8069/odoo_controller/students');
    return response.data.data;
};

export default function useStudentsQuery() {
    const {data, isLoading} = useQuery({
        queryKey: "students",
        queryFn: fetchStudents,
    });
    const students = data ? data.map((item, index) => ({
        ...item,
        class: item.classid[1],
        key: index+1
    })) : null;
    return {students, isLoading}
};
