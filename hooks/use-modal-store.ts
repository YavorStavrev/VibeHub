
<<<<<<< HEAD
import { Server } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "createServer" | "invite";
=======
import { Server } from "@/lib/generated/prisma/client";
import { create } from "zustand";

export type ModalType = "createServer" | "invite" |"editServer" | "members" | "createChannel";
>>>>>>> main

interface ModalData {
    server?: Server
}

interface ModalStore {
    type: ModalType | null;
    data: ModalData;
    isOpen: boolean;
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
<<<<<<< HEAD
    onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
=======
    onOpen: (type, data = {}) => set({ isOpen: true, type: type, data }),
>>>>>>> main
    onClose: () => set({ type: null, isOpen: false })
}));