import { useNavigate } from 'react-router';
import { HomeOutlined } from '@ant-design/icons';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#5A9F68] p-3 text-white font-medium flex space-x-4 gap-4">
            <button className="focus:outline-none cursor-pointer" onClick={() => navigate('/')}><HomeOutlined /></button>
            <button className="focus:outline-none cursor-pointer" onClick={() => navigate('/students')}>QUẢN LÝ SINH VIÊN</button>
            <button className="focus:outline-none cursor-pointer" onClick={() => navigate('/class')}>QUẢN LÝ LỚP</button>
        </div>
    );
}