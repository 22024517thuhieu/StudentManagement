import { useLocation, useNavigate } from "react-router";
import { Breadcrumb as AntdBreadcrumb } from "antd";

export default function Breadcrumb() {
    const location = useLocation();
    const navigate = useNavigate();

    const breadcrumbItems = {
        '/': 'Trang chủ',
        '/students': 'Quản lí sinh viên',
        '/students/import': 'Nhập',
        '/students/new': 'Thêm mới',
        '/class': 'Quản lí lớp học'
    };

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbPaths = pathSegments.reduce((acc, _, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        if (breadcrumbItems[path]) acc.push({ path, label: breadcrumbItems[path] });
        return acc;
    }, []);

    if (location.pathname === "/") {
        breadcrumbPaths.length = 0;
        breadcrumbPaths.push({ path: "/", label: "Trang chủ" });
    }

    return (
        <div className="bg-[#DBF3C9] p-3 pl-5 m-3 rounded-md border border-[#E8D6D6] my-2 underline text-sm font-medium">
            <AntdBreadcrumb>
                {breadcrumbPaths.map((item, index) => (
                    <AntdBreadcrumb.Item
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        className={`cursor-pointer ${index === breadcrumbPaths.length - 1 ? "font-bold" : ""}`}
                    >
                        {item.label}
                    </AntdBreadcrumb.Item>
                ))}
            </AntdBreadcrumb>
        </div>
    );
}