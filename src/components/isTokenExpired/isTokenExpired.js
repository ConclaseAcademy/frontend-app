import { jwtDecode }from "jwt-decode";

export function isTokenExpired(token) {
  try {
    const decoded = jwtDecode(token);
    console.log("Expiry the token: ", decoded)
    if (!decoded.exp) return true;

    const currentTime = Date.now() / 1000; // in seconds
    return decoded.exp < currentTime;
  } catch (e) {
    return true; // invalid token
  }
}
