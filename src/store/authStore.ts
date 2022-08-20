import create from "zustand";

type UserInfo = { username: string; isUser: boolean };

interface AuthStore {
  username: string | null;
  isAuthenticated: boolean;
  setCredential: (userInfo: UserInfo) => void;
}

const useAuthStore = create<AuthStore>((set) => {
  return {
    username: null,
    isAuthenticated: false,
    setCredential: (userInfo: UserInfo) => {
      return set(() => {
        return {
          isAuthenticated: userInfo.isUser,
          username: userInfo.username,
        };
      });
    },
  };
});

export { useAuthStore };
