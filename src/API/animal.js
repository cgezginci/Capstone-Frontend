import axios from "axios";

export const getCustomers = async () => {
  const res = await axios.get(
    "https://capstone-backend-0k4t.onrender.com/v1/customer/all"
  );
  return res.data.data;
};

export const getAnimals = async () => {
  const res = await axios.get(
    "https://capstone-backend-0k4t.onrender.com/v1/animal/all"
  );
  return res.data.data;
};

export const deleteAnimal = async (id) => {
  const { res } = await axios.delete(
    `https://capstone-backend-0k4t.onrender.com/v1/animal/${id}`
  );
  return res;
};

export const addAnimal = async (animal) => {
  const res = await axios.post(
    "https://capstone-backend-0k4t.onrender.com/v1/animal",
    animal
  );
  return res.data;
};

export const updateAnimalFunc = async (animal) => {
  const res = await axios.put(
    `https://capstone-backend-0k4t.onrender.com/v1/animal`,
    animal
  );
  return res.data;
};

export const getAnimalByName = async (name) => {
  const res = await axios.get(
    `https://capstone-backend-0k4t.onrender.com/v1/animal/${name}`
  );
  return res.data.data;
};

export const getAnimalByCustomerName = async (name) => {
  const res = await axios.get(
    `https://capstone-backend-0k4t.onrender.com/v1/animal/customer/${name}`
  );
  return res.data.data;
};
