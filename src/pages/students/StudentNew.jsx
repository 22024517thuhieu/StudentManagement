import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button, DatePicker, Select } from "antd";

import { useNavigate } from "react-router";

const schema = z.object({
    studentId: z.string().min(1, "Mã sinh viên là bắt buộc"),
    name: z.string().min(1, "Họ tên là bắt buộc"),
    dob: z.date().optional(),
    gender: z.enum(["Nam", "Nữ", "Khác"]).optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    email: z.string().email("Email không hợp lệ"),
    phone: z.string().regex(/^\d+$/, "Số điện thoại không hợp lệ"),
    classId: z.string().optional(),
    username: z.string().optional()
});

export default function StudentNew() {
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        resolver: zodResolver(schema)
    });
    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
    };

    const navigate = useNavigate();

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-center text-2xl font-medium mb-4 text-[#4C4E648A]">Thêm mới sinh viên</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-6 gap-4">
                <Input className="col-span-2 h-12" placeholder="Mã sinh viên(*)" {...register("studentId")} />
                <Input className="col-span-4 h-12" placeholder="Họ tên" {...register("name")} />
                <DatePicker placeholder="Ngày sinh" className="col-span-3 h-12" {...register("dob")} />
                <Select placeholder="Giới tính" className="col-span-3 h-12" {...register("gender")}>
                    <Select.Option value="Nam">Nam</Select.Option>
                    <Select.Option value="Nữ">Nữ</Select.Option>
                    <Select.Option value="Khác">Khác</Select.Option>
                </Select>
                <Input className="col-span-4 h-12" placeholder="Địa chỉ" {...register("address")} />
                <Input className="col-span-2 h-12" placeholder="Thành phố" {...register("city")} />
                <Input className="col-span-3 h-12" placeholder="Email" {...register("email")} />
                <Input className="col-span-3 h-12" placeholder="Số điện thoại" {...register("phone")} />
                <Input className="col-span-3 h-12" placeholder="Mã lớp học" {...register("classId")} />
                <Input className="col-span-3 h-12" placeholder="Username" {...register("username")} />
                <div className="col-span-6 flex justify-center gap-4 mt-4">
                    <Button type="primary" htmlType="submit" className="bg-[#5A9F68]! h-10!">Lưu</Button>
                    <Button type="primary" className="bg-[#43DB61]! h-10!">Lưu và tiếp tục</Button>
                    <Button className="h-10!" onClick={() => navigate("/students")}>Trở về danh sách</Button>
                </div>
            </form>
        </div>
    );
}
