import { useState } from "react";
import { Button, Checkbox, Popover } from "antd";
import { SettingOutlined } from "@ant-design/icons";

import useFiltersStore from "../../../store/FilterStore";
import './checkbox.css';

const FilterButton = () => {
    const [visible, setVisible] = useState(false);
    const { checkedKeyList: checkedList, setCheckedList } = useFiltersStore();

    const options = [
        { label: "STT", value: '1' },
        { label: "Mã sinh viên", value: '2' },
        { label: "Họ tên", value: '3' },
        { label: "Ngày sinh", value: '4' },
        { label: "Giới tính", value: '5' },
        { label: "Địa chỉ", value: '6' },
        { label: "Thành phố", value: '7' },
        { label: "Email", value: '8' },
        { label: "Số điện thoại", value: '9' },
        { label: "Mã lớp", value: '10' },
    ];

    const content = (
        <div className="rounded-lg w-52">
            <Checkbox.Group
                value={checkedList}
                options={options}
                onChange={(value) => {
                    setCheckedList(value);
                }}
                className="flex-col gap-2"
            />
            <Button type="primary" className="w-full bg-[#5A9F68]! mt-2" onClick={() => setVisible(false)}>ÁP DỤNG</Button>
        </div>
    );

    return (
        <Popover
            content={content}
            trigger="click"
            open={visible}
            onOpenChange={(v) => setVisible(v)}
            placement="bottomLeft"
        >
            <Button icon={<SettingOutlined style={{ color: "white" }} />} className="bg-[#5A9F68]!" />
        </Popover>
    );
};

export default FilterButton;
