import { useQuery } from "@tanstack/react-query";

const fetchStudents = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, code: "22024517", name: "Nguyen Van A", dob: "01/01/2000", gender: "Nam", address: "Ha Noi", city: "Ha Noi", email: "a@example.com", phone: "0123456789", class: "CNTT01" },
                { id: 2, code: "22024518", name: "Tran Thi B", dob: "02/02/2001", gender: "Nữ", address: "Ho Chi Minh", city: "Ho Chi Minh", email: "b@example.com", phone: "0987654321", class: "CNTT02" },
            ]);
        }, 1000);
    });
};

export const useStudentsQuery = () => {
    return useQuery({
        queryKey: ["students"],
        queryFn: fetchStudents,
    });
};
