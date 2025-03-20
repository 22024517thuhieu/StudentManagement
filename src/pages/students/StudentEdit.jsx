import { useState } from "react";
import { useLocation } from "react-router";
import { Button, Input, Select, DatePicker, Alert, Form, notification } from "antd";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import * as z from "zod";
import { ReturnButton } from "../../shared/ReturnButton";

// Validation Schema
const schema = z.object({
    studentId: z.string().min(1, "Mã sinh viên là bắt buộc"),
    name: z.string().min(1, "Họ tên là bắt buộc"),
    dob: z.preprocess((val) => val ? dayjs(val).toDate() : undefined, z.date().optional()),
    gender: z.enum(["Nam", "Nữ", "Khác"]).optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    email: z.string().email("Email không hợp lệ"),
    phone: z.string().regex(/^\d{10,11}$/, "Số điện thoại không hợp lệ"),
    class: z.string().optional(),
    username: z.string().optional()
});

// Reusable FormField Component
const FormField = ({ name, control, errors, placeholder, type = "input", options = [] }) => (
    <Form.Item validateStatus={errors[name] ? "error" : ""} help={errors[name]?.message} className="col-span-2">
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                switch (type) {
                    case "date":
                        return (
                            <DatePicker
                                {...field}
                                className="w-full h-12"
                                placeholder={placeholder}
                                value={field.value ? dayjs(field.value) : null}
                                onChange={(date) => field.onChange(date ? date.toDate() : undefined)}
                            />
                        );
                    case "select":
                        return (
                            <Select
                                {...field}
                                className="w-full h-12!"
                                placeholder={placeholder}
                                onChange={(value) => field.onChange(value)}
                            >
                                {options.map((opt) => (
                                    <Select.Option key={opt} value={opt}>
                                        {opt}
                                    </Select.Option>
                                ))}
                            </Select>
                        );
                    default:
                        return <Input {...field} className="w-full h-12" placeholder={placeholder} />;
                }
            }}
        />
    </Form.Item>
);

export default function StudentEdit() {
    const location = useLocation();
    const student = location.state.student;

    const { handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            studentId: student.code,
            name: student.fullname,
            dob: dayjs(student.dob),
            gender: student.sex,
            address: student.address,
            city: student.homecity,
            email: student.email,
            phone: student.phone_number,
            class: student.classid[1],
            username: student.username
        }
    });

    const [serverError, setServerError] = useState(null);

    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.success({
            message: `Notification`,
            description: "uiahsduadhs",
            placement: "bottomRight",
        });
    };

    const onSubmit = async (data) => {
        try {
            console.log(data);
            // Simulate API call success
            openNotification();
            reset();
        } catch (error) {
            setServerError("Lỗi từ server: Không thể lưu dữ liệu");
        }
    };

    return (
        <div className="bg-white p-6 shadow-md rounded-lg max-w-4xl mx-auto">
            {contextHolder}
            <h2 className="text-xl font-medium text-center mb-4">Cập nhật thông tin sinh viên</h2>
            <Form onFinish={handleSubmit(onSubmit)} className="grid grid-cols-4 gap-4">
                <FormField name="studentId" control={control} errors={errors} placeholder="Mã sinh viên(*)" />
                <FormField name="name" control={control} errors={errors} placeholder="Họ tên" />
                <FormField name="dob" control={control} errors={errors} placeholder="Ngày sinh" type="date" />
                <FormField name="gender" control={control} errors={errors} placeholder="Giới tính" type="select" options={["Nam", "Nữ", "Khác"]} />
                <FormField name="address" control={control} errors={errors} placeholder="Địa chỉ" />
                <FormField name="city" control={control} errors={errors} placeholder="Thành phố" />
                <FormField name="email" control={control} errors={errors} placeholder="Email" />
                <FormField name="phone" control={control} errors={errors} placeholder="Số điện thoại" />
                <FormField name="class" control={control} errors={errors} placeholder="Mã lớp học" />
                <FormField name="username" control={control} errors={errors} placeholder="Username" />

                <div className="col-span-4 flex justify-center gap-4 mt-4">
                    <ReturnButton />
                    <Button type="primary" htmlType="submit" className="bg-[#5A9F68]! h-10!">Lưu</Button>
                </div>
            </Form>
            {serverError && <Alert message={serverError} type="error" className="mt-4" showIcon />}
        </div>
    );
}
