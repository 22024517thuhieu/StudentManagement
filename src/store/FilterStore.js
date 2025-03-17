import { create } from "zustand";

const useFiltersStore = create((set) => ({
    checkedKeyList: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    setCheckedList: (values) =>
        set((state) => ({
            checkedKeyList: [...values, "11"],
        })),
}));

export default useFiltersStore;
