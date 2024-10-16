import { create } from "zustand";

type State = {
  openModal: boolean;
  showPassword: boolean;
  showConfirmPassword: boolean;
  isAuthenticated: boolean;
};

type Action = {
  togglePasswordVisibility: () => void;
  toggleConfirmsPasswordVisibility: () => void;
  toggleModal: () => void;
  isLogin: () => void;
  isLogout: () => void;
};

export const useTeacherProvider = create<State & Action>((set) => ({
  openModal: false,
  showPassword: false,
  showConfirmPassword: false,
  isAuthenticated: false,
  togglePasswordVisibility: () =>
    set((state) => ({ showPassword: !state.showPassword })),
  toggleConfirmsPasswordVisibility: () =>
    set((state) => ({ showConfirmPassword: !state.showConfirmPassword })),
  toggleModal: () => set((state) => ({ openModal: !state.openModal })),
  isLogin: () => set(() => ({ isAuthenticated: true })), // Cambia a autenticado
  isLogout: () => set(() => ({ isAuthenticated: false })),
}));
