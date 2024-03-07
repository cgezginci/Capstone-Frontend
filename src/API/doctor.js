import axios from "axios";

export const getDoctors = async () => {
  const res = await axios.get(
    "https://capstone-backend-0k4t.onrender.com/v1/doctor/all"
  );
  return res.data.data;
};

export const deleteDoctor = async (id) => {
  const { res } = await axios.delete(
    `https://capstone-backend-0k4t.onrender.com/v1/doctor/${id}`
  );
  return res;
};

export const addDoctor = async (doctor) => {
  const res = await axios.post(
    "https://capstone-backend-0k4t.onrender.com/v1/doctor",
    doctor
  );
  return res.data;
};

export const updateDoctorFunc = async (doctor) => {
  const res = await axios.put(
    `https://capstone-backend-0k4t.onrender.com/v1/doctor`,
    doctor
  );
  return res.data;
};

export const getAvailableDate = async () => {
  const res = await axios.get(
    "https://capstone-backend-0k4t.onrender.com/v1/available-date/all"
  );
  return res.data.data;
};

export const deleteAvailableDate = async (id) => {
  const { res } = await axios.delete(
    `https://capstone-backend-0k4t.onrender.com/v1/available-date/${id}`
  );
  return res;
};

export const addAvailableDate = async (availableDate) => {
  const res = await axios.post(
    "https://capstone-backend-0k4t.onrender.com/v1/available-date",
    availableDate
  );
  return res.data;
};

export const updateAvailableDateFunc = async (availableDate) => {
  const res = await axios.put(
    `https://capstone-backend-0k4t.onrender.com/v1/available-date`,
    availableDate
  );
  return res.data;
};

export const getDoctorByName = async (name) => {
  const res = await axios.get(
    `https://capstone-backend-0k4t.onrender.com/v1/doctor/${name}`
  );
  return res.data.data;
};
