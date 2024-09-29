import { create } from "zustand";

type State = {
  showPassword: boolean;
  showConfirmPassword: boolean;
};

type Action = {
  togglePasswordVisibility: () => void;
  toggleConfirmsPasswordVisibility: () => void;
};

export const useShowPassword = create<State & Action>((set) => ({
  showPassword: false,
  showConfirmPassword: false,
  togglePasswordVisibility: () =>
    set((state) => ({ showPassword: !state.showPassword })),
  toggleConfirmsPasswordVisibility: () =>
    set((state) => ({ showConfirmPassword: !state.showConfirmPassword })),
}));
