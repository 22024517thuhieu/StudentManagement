import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button, DatePicker, Select, notification } from "antd";
import dayjs from "dayjs";
import useAddStudent from "../../apis/useAddStudent";
import { ReturnButton } from "../../shared/ReturnButton";

// Validation Schema
const schema = z.object({
    code: z.string().min(1, "Mã sinh viên là bắt buộc"),
    fullname: z.string().min(1, "Họ tên là bắt buộc"),
    dob: z.preprocess((val) => val ? dayjs(val).toDate() : undefined, z.date().optional()),
    sex: z.enum(["Nam", "Nữ", "Khác"]).optional(),
    address: z.string().optional(),
    homecity: z.string().optional(),
    email: z.string().email("Email không hợp lệ"),
    phone_number: z.string().regex(/^\d+$/, "Số điện thoại không hợp lệ"),
    classId: z.string().optional(),
    username: z.string().optional()
});

// Reusable FormField Component with Error Handling
const FormField = ({ name, control, errors, placeholder, type = "input", options = [], span = 3 }) => {
    return (
        <div className={`col-span-${span}`}>
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
            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
        </div>
    );
};

export default function StudentNew() {
    const { handleSubmit, formState: { errors }, control, reset } = useForm({
        resolver: zodResolver(schema)
    });

    const addMutation = useAddStudent();

    const [api, contextHolder] = notification.useNotification();
    const openNotification = (status, message) => {
        status ?
        api.success({
            message: `Thong bao`,
            description: message,
            placement: "bottomRight",
        }) :
        api.error({
            message: `Thong bao`,
            description: message,
            placement: "bottomRight",
        });
    };

    const onSubmit = async (data) => {
        const response = await addMutation.mutateAsync(data);
        console.log(response);
        openNotification(response.data.status == "success", response.data.message);
        // reset();
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            {contextHolder}
            <h2 className="text-center text-2xl font-medium mb-4 text-[#4C4E648A]">Thêm mới sinh viên</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-6 gap-4">
                <FormField name="code" control={control} errors={errors} placeholder="Mã sinh viên(*)" span={2} />
                <FormField name="fullname" control={control} errors={errors} placeholder="Họ tên" span={4} />
                <FormField name="dob" control={control} errors={errors} placeholder="Ngày sinh" type="date" span={3} />
                <FormField name="sex" control={control} errors={errors} placeholder="Giới tính" type="select" options={["Nam", "Nữ", "Khác"]} span={3} />
                <FormField name="address" control={control} errors={errors} placeholder="Địa chỉ" span={4} />
                <FormField name="homecity" control={control} errors={errors} placeholder="Thành phố" span={2} />
                <FormField name="email" control={control} errors={errors} placeholder="Email" span={3} />
                <FormField name="phone_number" control={control} errors={errors} placeholder="Số điện thoại" span={3} />
                <FormField name="classId" control={control} errors={errors} placeholder="Mã lớp học" span={3} />
                <FormField name="username" control={control} errors={errors} placeholder="Username" span={3} />

                <div className="col-span-6 flex justify-center gap-4 mt-4">
                    {/* <Button type="primary" htmlType="submit" className="bg-[#5A9F68]! h-10!">Lưu</Button> */}
                    <Button type="primary" htmlType="submit" className="bg-[#43DB61]! h-10!">Lưu và tiếp tục</Button>
                    <ReturnButton />
                </div>
            </form>
        </div>
    );
}
