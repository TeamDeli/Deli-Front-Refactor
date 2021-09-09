import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 1000,
});

export const getProfile = async () => {
  try {
    const data = await instance.get("/deli/api/profile/1", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("[SUCCESS] GET profile");
    console.log(data.data);
    return data.data;
  } catch (e) {
    console.log("[FAIL] GET profile");
    return null;
  }
};
