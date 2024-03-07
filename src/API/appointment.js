import axios from "axios";

export const getDoctors = async () => {
  const res = await axios.get(
    "https://capstone-backend-0k4t.onrender.com/v1/doctor/all"
  );
  return res.data.data;
};

export const getAnimals = async () => {
  const res = await axios.get(
    "https://capstone-backend-0k4t.onrender.com/v1/animal/all"
  );
  return res.data.data;
};

export const getAppointments = async () => {
  const res = await axios.get(
    "https://capstone-backend-0k4t.onrender.com/v1/appointment/all"
  );
  return res.data.data;
};

export const deleteAppointment = async (id) => {
  const { res } = await axios.delete(
    `https://capstone-backend-0k4t.onrender.com/v1/appointment/${id}`
  );
  return res;
};

export const addAppointment = async (appointment) => {
  const res = await axios.post(
    "https://capstone-backend-0k4t.onrender.com/v1/appointment",
    appointment
  );
  return res.data;
};

export const updateAppointmentFunc = async (appointment) => {
  const res = await axios.put(
    `https://capstone-backend-0k4t.onrender.com/v1/appointment`,
    appointment
  );
  return res.data;
};

export const getAppointmentByDoctorAndDate = async (
  doctorName,
  startDate,
  endDate
) => {
  const res = await axios.get(
    `https://capstone-backend-0k4t.onrender.com/v1/appointment/filtered?doctorName=${doctorName}&startDate=${startDate}&endDate=${endDate}`
  );
  return res.data.data;
};

export const getAppointmentByAnimalAndDate = async (
  animalName,
  startDate,
  endDate
) => {
  const res = await axios.get(
    `https://capstone-backend-0k4t.onrender.com/v1/appointment/filter?animalName=${animalName}&startDate=${startDate}&endDate=${endDate}`
  );
  return res.data.data;
};
