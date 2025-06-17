import axios from "axios";

const API_BASE_URL = "https://691e-136-232-57-98.ngrok-free.app";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("pvr-token"); // or 'authToken' or whatever key you're using

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getData = async (url, params = {}, config = {}) => {
  try {
    const response = await axiosInstance.get(url, {
      ...config,
      params,
    });
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};

export const postJson = async (url, data, config = {}) => {
  try {
    const response = await axiosInstance.post(url, data, {
      ...config,
      headers: {
        "Content-Type": "application/json",
        ...config.headers,
      },
    });
    return response.data;
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
export const postMultipart = async (url, formData, config = {}) => {
  try {
    const response = await axiosInstance.post(url, formData, {
      ...config,
      headers: {
        "Content-Type": "multipart/form-data",
        ...config.headers,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};

export const putJson = async (url, data, config = {}) => {
  try {
    const response = await axiosInstance.put(url, data, {
      ...config,
      headers: {
        "Content-Type": "application/json",
        ...config.headers,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};

export const putMultipart = async (url, formData, config = {}) => {
  try {
    const response = await axiosInstance.put(url, formData, {
      ...config,
      headers: {
        "Content-Type": "multipart/form-data",
        ...config.headers,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};

export const deleteData = async (url, dataOrParams = {}, config = {}) => {
  try {
    const response = await axiosInstance.delete(url, {
      ...config,
      ...(config.useParams
        ? { params: dataOrParams } // Use as query params
        : { data: dataOrParams }), // Use as request body
    });
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};
