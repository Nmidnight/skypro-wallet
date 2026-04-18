import axios from "axios";

export const api = axios.create({
  baseURL: "https://wedev-api.sky.pro/api",
});
const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
};
export const getTransactionsByPeriod = async (start, end) => {
  const token = localStorage.getItem("token");

  const res = await api.post(
    "/transactions/period",
    {
      start: formatDate(start),
      end: formatDate(end),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  return res.data;
};
