import Cookies from "js-cookie";

export function outOffApp() {
  Cookies.set("accessToken", "");
  Cookies.set("refreshToken", "");
}
