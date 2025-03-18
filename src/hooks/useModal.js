import { useState } from "react";

export default function useModal() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => setIsModalVisible(true);
    const handleClose = () => {
        setIsModalVisible(false);
    };

    return {
        isModalVisible,
        showModal,
        handleClose
    };
}