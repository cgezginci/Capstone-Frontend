import axios from "axios";

export const getVaccines = async () => {
  const res = await axios.get(
    "https://capstone-backend-0k4t.onrender.com/v1/vaccine/all"
  );
  return res.data.data;
};

export const getReports = async () => {
  const res = await axios.get(
    "https://capstone-backend-0k4t.onrender.com/v1/report/all"
  );
  return res.data.data;
};

export const getAppointments = async () => {
  const res = await axios.get(
    "https://capstone-backend-0k4t.onrender.com/v1/appointment/all"
  );
  return res.data.data;
};

export const deleteReport = async (id) => {
  const { res } = await axios.delete(
    `https://capstone-backend-0k4t.onrender.com/v1/report/${id}`
  );
  return res;
};

export const addReport = async (report) => {
  const res = await axios.post(
    "https://capstone-backend-0k4t.onrender.com/v1/report",
    report
  );
  return res.data;
};

export const updateReportFunc = async (report) => {
  const res = await axios.put(
    `https://capstone-backend-0k4t.onrender.com/v1/report`,
    report
  );
  return res.data;
};
