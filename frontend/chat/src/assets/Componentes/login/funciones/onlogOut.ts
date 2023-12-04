export const onLogout = (setAuthenticated: (arg0: boolean) => void) => {
    localStorage.removeItem('login');
    setAuthenticated(false);
  };
  