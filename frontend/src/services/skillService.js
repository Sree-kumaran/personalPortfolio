import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const skillService = {
  getSkills: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/skills`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addSkill: async (category, technologies) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/skills`, {
        category,
        technologies,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateSkill: async (category, technologies) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/skills/${category}`, {
        technologies,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteSkill: async (category) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/skills/${category}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default skillService;
