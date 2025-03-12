import { useState } from "react";

export default function useModal() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => setIsModalVisible(true);
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => setIsModalVisible(false);

    return {
        isModalVisible,
        showModal,
        handleOk,
        handleCancel,
    };
}