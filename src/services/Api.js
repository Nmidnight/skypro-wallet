import axios from "axios";

export const api = axios.create({
  baseURL: "https://wedev-api.sky.pro/api",
});

export const getTransactionsByPeriod = async (start, end) => {
  const token =
    JSON.parse(localStorage.getItem("userInfo"))?.token ||
    localStorage.getItem("token");

  

  const res = await api.post(
    "/transactions/period",
    {
      start: start, 
      end: end,   
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    }
  );

  return res.data;
};
