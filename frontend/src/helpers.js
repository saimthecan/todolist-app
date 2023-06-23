export function isLoggedIn() {
    const token = sessionStorage.getItem("token");
    const user = sessionStorage.getItem("user");
    return token && user;
  }