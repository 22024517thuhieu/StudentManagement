import { Button, Layout } from 'antd';

import { useNavigate } from 'react-router';

const { Content } = Layout;

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Content className="p-10 flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-[#5A9F68] text-2xl font-semibold mb-6">
                    Chào mừng bạn đến với hệ thống quản lý sinh viên!
                </h1>
                <Button type="default" className="border border-[#5A9F68]! text-[#5A9F68]! px-6 py-2 rounded mb-4">
                    CHỌN CHỨC NĂNG ĐỂ TIẾP TỤC!
                </Button>
                <div className="flex justify-center gap-4">
                    <Button type="primary" onClick={() => navigate('/students')} className="bg-[#5A9F68]! border-none">QUẢN LÝ SINH VIÊN</Button>
                    <Button type="primary" onClick={() => navigate('/classes')} className="bg-[#5A9F68]! border-none">QUẢN LÝ LỚP</Button>
                </div>
            </div>
        </Content>
    );
};

export default HomePage;
