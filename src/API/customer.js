import axios from "axios";

export const getCustomers = async () => {
  const res = await axios.get(
    "https://capstone-backend-0k4t.onrender.com/v1/customer/all"
  );
  return res.data.data;
};

export const deleteCustomer = async (id) => {
  const { res } = await axios.delete(
    `https://capstone-backend-0k4t.onrender.com/v1/customer/${id}`
  );
  return res;
};

export const addCustomer = async (customer) => {
  const res = await axios.post(
    "https://capstone-backend-0k4t.onrender.com/v1/customer",
    customer
  );
  return res.data;
};

export const updateCustomerFunc = async (customer) => {
  const res = await axios.put(
    `https://capstone-backend-0k4t.onrender.com/v1/customer`,
    customer
  );
  return res.data;
};

export const getCustomerByName = async (name) => {
  const res = await axios.get(
    `https://capstone-backend-0k4t.onrender.com/v1/customer/${name}`
  );
  return res.data.data;
};
