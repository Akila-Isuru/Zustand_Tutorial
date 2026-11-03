import { create } from "zustand";

interface AuthState {
  userName: string;
  isLoggedIn: boolean;
  login: (name: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  userName: "",
  isLoggedIn: false,
  login: (name) => set({ userName: name, isLoggedIn: true }),
  logout: () => set({ userName: "", isLoggedIn: false }),
}));

