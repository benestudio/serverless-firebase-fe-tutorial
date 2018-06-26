import Axios from "axios";

let apiPrefix = '/';

if (process.env.NODE_ENV === 'development') {
  apiPrefix = '/fbdev/';
}

export const addCalories = async (food, calories) => {
  const resp = await Axios.get(`${apiPrefix}addCalories`, {
    params: { food, calories }
  });

  const { data: { success } } = resp;
  return success;
};
