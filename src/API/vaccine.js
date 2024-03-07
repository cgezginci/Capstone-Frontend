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

export const getAnimals = async () => {
  const res = await axios.get(
    "https://capstone-backend-0k4t.onrender.com/v1/animal/all"
  );
  return res.data.data;
};

export const deleteVaccine = async (id) => {
  const { res } = await axios.delete(
    `https://capstone-backend-0k4t.onrender.com/v1/vaccine/${id}`
  );
  return res;
};

export const addVaccine = async (vaccine) => {
  const res = await axios.post(
    "https://capstone-backend-0k4t.onrender.com/v1/vaccine",
    vaccine
  );
  return res.data;
};

export const updateVaccineFunc = async (vaccine) => {
  const res = await axios.put(
    `https://capstone-backend-0k4t.onrender.com/v1/vaccine`,
    vaccine
  );
  return res.data;
};

export const getVaccineByName = async (name) => {
  const res = await axios.get(
    `https://capstone-backend-0k4t.onrender.com/v1/vaccine/${name}`
  );
  return res.data.data;
};

export const getVaccineByAnimal = async (animalName) => {
  const res = await axios.get(
    `https://capstone-backend-0k4t.onrender.com/v1/vaccine/filter/${animalName}`
  );
  return res.data.data;
};

export const getVaccineByDate = async (
  protectionStartDate,
  protectionEndDate
) => {
  const res = await axios.get(
    `https://capstone-backend-0k4t.onrender.com/v1/vaccine/date?protectionStartDate=${protectionStartDate}&protectionEndDate=${protectionEndDate}`
  );
  return res.data.data;
};
