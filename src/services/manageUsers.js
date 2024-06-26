import axios from '../setup/axios'

const getUsers = async (page, limit) => {
  const response = await axios.get(`/admin/getuser/getpage?page=${page}&limit=${limit}`);
  return response;
}
const getDetailUser = async (userId) => {
  console.log("check userid:", userId);
  const response = await axios.get(`/detail-user/${userId}`);
  return response;
}
const loginUser = async (values) => {
  const response = await axios.post('/login', values);
  return response;
}

const signupUser = async (values) => {
  const res = await axios.post('/sign', values);
  return res;
}
export {
  getUsers,
  loginUser,
  signupUser,
  getDetailUser
}