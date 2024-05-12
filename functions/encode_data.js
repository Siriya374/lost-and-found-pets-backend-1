import CryptoJS from "crypto-js";

const key = "82f2ceed4c503896c8a291e560bd4325";
const iv = Buffer.alloc(32, 0); //  iv
export function encrypt(data) {
  try {
    const cipher = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      CryptoJS.enc.Utf8.parse(key),
      {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
      }
    );

    return cipher.toString();
  } catch (err) {
    return err;
  }
}
export function decrypt(data) {
  try {
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
      iv: CryptoJS.enc.Utf8.parse(iv),
      mode: CryptoJS.mode.CBC,
    });

    return JSON.parse(CryptoJS.enc.Utf8.stringify(cipher).toString());
  } catch (err) {
    return data;
  }
}
