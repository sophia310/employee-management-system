import API from "./api";

export const getEmployees = () =>
  API.get("/employees");

export const addEmployee = (data) =>
  API.post("/employees", data);

export const deleteEmployee = (id) =>
  API.delete(`/employees/${id}`);

export const updateEmployee = (id, data) =>
  API.put(`/employees/${id}`, data);

export const searchEmployee = (name) =>
  API.get(`/employees/search?name=${name}`);

