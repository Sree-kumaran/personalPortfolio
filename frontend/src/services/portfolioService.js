import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const portfolioService = {
  getPortfolio: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/portfolio`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createPortfolio: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/portfolio`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updatePortfolio: async (id, data) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/portfolio/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default portfolioService;
