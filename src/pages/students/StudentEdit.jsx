import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button, Input, Select, DatePicker, Alert, Form } from "antd";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import * as z from "zod";

const schema = z.object({
    studentId: z.string().min(1, "Mã sinh viên là bắt buộc"),
    name: z.string().min(1, "Họ tên là bắt buộc"),
    dob: z.date().optional(),
    gender: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    email: z.string().email("Email không hợp lệ"),
    phone: z.string().regex(/^\d{10,11}$/, "Số điện thoại không hợp lệ"),
    class: z.string().optional(),
    username: z.string().optional()
});

export default function StudentEdit() {
    const location = useLocation();
    const navigate = useNavigate();
    const student = location.state.student;

    const { handleSubmit, control, formState: { errors }, setError } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            studentId: student.code,
            name: student.fullname,
            dob: dayjs(student.dob),
            gender: student.sex,
        },
    });
    const [serverError, setServerError] = useState(null);
    const onSubmit = async (data) => {
        try {
            console.log(data);
            // Simulating an API call
            throw new Error("Lỗi từ server: Không thể lưu dữ liệu"); // Remove this in actual API call
        } catch (error) {
            setServerError(error.message);
        }
    };

    return (
        <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto">
            <h2 className="text-xl font-medium text-center mb-4">Cập nhật thông tin sinh viên</h2>
            <Form onFinish={handleSubmit(onSubmit)} className="grid grid-cols-4 gap-4">
                <Controller name="studentId" control={control} render={({ field }) => (
                    <Form.Item validateStatus={errors.studentId ? "error" : "d"} help={errors.studentId?.message} className="col-span-2">
                        <Input {...field} placeholder="Mã sinh viên(*)" className="p-2 border rounded-md h-12!" />
                    </Form.Item>
                )} />
                <Controller name="name" control={control} render={({ field }) => (
                    <Form.Item validateStatus={errors.name ? "error" : ""} help={errors.name?.message} className="col-span-2">
                        <Input {...field} placeholder="Họ tên" className="p-2 border rounded-md h-12!" />
                    </Form.Item>
                )} />
                <Controller name="dob" control={control} render={({ field }) => (
                    <Form.Item validateStatus={errors.dob ? "error" : ""} help={errors.dob?.message} className="col-span-2">
                        <DatePicker {...field} placeholder="Ngày sinh" className="w-full p-2 border rounded-md h-12!" />
                    </Form.Item>
                )} />
                <Controller name="gender" control={control} render={({ field }) => (
                    <Form.Item className="col-span-2">
                        <Select {...field} placeholder="Giới tính" className="w-full h-12!">
                            <Select.Option value="male">Nam</Select.Option>
                            <Select.Option value="female">Nữ</Select.Option>
                        </Select>
                    </Form.Item>
                )} />
                <Controller name="address" control={control} render={({ field }) => (
                    <Form.Item className="col-span-3">
                        <Input {...field} placeholder="Địa chỉ" className="p-2 border rounded-md h-12!" />
                    </Form.Item>
                )} />
                <Controller name="city" control={control} render={({ field }) => (
                    <Form.Item className="col-span-1">
                        <Input {...field} placeholder="Thành phố" className="p-2 border rounded-md h-12!" />
                    </Form.Item>
                )} />
                <Controller name="email" control={control} render={({ field }) => (
                    <Form.Item validateStatus={errors.email ? "error" : ""} help={errors.email?.message} className="col-span-2">
                        <Input {...field} placeholder="Email" className="p-2 border rounded-md h-12!" />
                    </Form.Item>
                )} />
                <Controller name="phone" control={control} render={({ field }) => (
                    <Form.Item validateStatus={errors.phone ? "error" : ""} help={errors.phone?.message} className="col-span-2">
                        <Input {...field} placeholder="Số điện thoại" className="p-2 border rounded-md h-12!" />
                    </Form.Item>
                )} />
                <Controller name="class" control={control} render={({ field }) => (
                    <Form.Item className="col-span-2">
                        <Input {...field} placeholder="Mã lớp học" className="p-2 border rounded-md h-12!" />
                    </Form.Item>
                )} />
                <Controller name="username" control={control} render={({ field }) => (
                    <Form.Item className="col-span-2">
                        <Input {...field} placeholder="Username" className="p-2 border rounded-md h-12!" />
                    </Form.Item>
                )} />
                <div className="col-span-4 flex justify-center gap-4 mt-4">
                    <Button type="default" className="bg-gray-200 h-12!" onClick={() => navigate("/students")}>Trở về danh sách</Button>
                    <Button type="primary" htmlType="submit" className="bg-[#5A9F68]! h-12!">Lưu</Button>
                </div>
            </Form>
            {serverError && <Alert message={serverError} type="error" className="mt-4" showIcon />}
        </div>
    );
}